import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Trophy, 
  TrendingUp, 
  Users, 
  BookOpen, 
  DollarSign, 
  ArrowRight,
  RotateCcw,
  Briefcase
} from 'lucide-react';

interface QuizScore {
  categories: Record<string, number>;
  total: number;
  percentage: number;
  recommendations: string[];
}

const careerDetails = {
  'Engineering & Technology': {
    description: 'Strong analytical and problem-solving skills suggest a natural fit for engineering fields.',
    careers: [
      { title: 'Software Engineer', package: '₹8-25 LPA', growth: 'High' },
      { title: 'Data Scientist', package: '₹12-30 LPA', growth: 'Very High' },
      { title: 'Cybersecurity Analyst', package: '₹10-20 LPA', growth: 'High' }
    ],
    courses: ['Computer Science', 'Information Technology', 'Electronics Engineering'],
    skillsNeeded: ['Programming', 'Mathematics', 'Logical Thinking']
  },
  'Arts & Creative Fields': {
    description: 'Your creative thinking and artistic interests align well with creative industries.',
    careers: [
      { title: 'Graphic Designer', package: '₹4-12 LPA', growth: 'Medium' },
      { title: 'Content Creator', package: '₹6-15 LPA', growth: 'High' },
      { title: 'UI/UX Designer', package: '₹8-18 LPA', growth: 'Very High' }
    ],
    courses: ['Fine Arts', 'Graphic Design', 'Mass Communication'],
    skillsNeeded: ['Creativity', 'Design Tools', 'Communication']
  },
  'Social Services & Psychology': {
    description: 'Your empathy and people skills make you ideal for roles helping others.',
    careers: [
      { title: 'Clinical Psychologist', package: '₹6-15 LPA', growth: 'Medium' },
      { title: 'Social Worker', package: '₹4-10 LPA', growth: 'Medium' },
      { title: 'HR Manager', package: '₹8-20 LPA', growth: 'High' }
    ],
    courses: ['Psychology', 'Social Work', 'Human Resources'],
    skillsNeeded: ['Empathy', 'Communication', 'Problem Solving']
  }
};

export default function QuizResults() {
  const [score, setScore] = useState<QuizScore | null>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const navigate = useNavigate();

  useEffect(() => {
    const savedScore = localStorage.getItem('quizScore');
    const savedAnswers = localStorage.getItem('quizAnswers');
    
    if (savedScore && savedAnswers) {
      setScore(JSON.parse(savedScore));
      setAnswers(JSON.parse(savedAnswers));
    } else {
      // Redirect to quiz if no results found
      navigate('/quiz');
    }
  }, [navigate]);

  if (!score) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Loading your results...</p>
          </div>
        </div>
      </div>
    );
  }

  const getGrowthColor = (growth: string) => {
    switch (growth) {
      case 'Very High': return 'text-success';
      case 'High': return 'text-primary';
      case 'Medium': return 'text-warning';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Trophy className="h-8 w-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Your Career Assessment Results
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Based on your responses, here are your personalized career recommendations
          </p>
        </div>

        {/* Overall Score */}
        <Card className="mb-8 shadow-hover">
          <CardHeader>
            <CardTitle className="text-xl">Assessment Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{score.percentage}%</div>
                <div className="text-muted-foreground">Overall Match</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">{score.recommendations.length}</div>
                <div className="text-muted-foreground">Career Paths</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">{Object.keys(answers).length}</div>
                <div className="text-muted-foreground">Questions Answered</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Category Breakdown */}
        <Card className="mb-8 shadow-card">
          <CardHeader>
            <CardTitle className="text-xl">Assessment Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(score.categories).map(([category, value]) => (
                <div key={category}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{category}</span>
                    <span className="text-sm text-muted-foreground">{value} responses</span>
                  </div>
                  <Progress value={(value / Object.keys(answers).length) * 100} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Career Recommendations */}
        <div className="space-y-8">
          {score.recommendations.map((recommendation, index) => {
            const details = careerDetails[recommendation as keyof typeof careerDetails];
            if (!details) return null;

            return (
              <Card key={index} className="shadow-hover">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Badge variant="default" className="text-sm">
                      #{index + 1} Recommended
                    </Badge>
                    <CardTitle className="text-2xl">{recommendation}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{details.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Career Options */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Briefcase className="h-4 w-4 mr-2" />
                        Career Options
                      </h4>
                      <div className="space-y-3">
                        {details.careers.map((career, idx) => (
                          <div key={idx} className="p-3 border rounded-lg">
                            <div className="font-medium">{career.title}</div>
                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                              <span className="flex items-center">
                                <DollarSign className="h-3 w-3 mr-1" />
                                {career.package}
                              </span>
                              <span className={`flex items-center ${getGrowthColor(career.growth)}`}>
                                <TrendingUp className="h-3 w-3 mr-1" />
                                {career.growth}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recommended Courses */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Recommended Courses
                      </h4>
                      <div className="space-y-2">
                        {details.courses.map((course, idx) => (
                          <Badge key={idx} variant="outline" className="block w-fit">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Skills to Develop */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        Skills to Develop
                      </h4>
                      <div className="space-y-2">
                        {details.skillsNeeded.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="block w-fit">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="mt-12 text-center space-y-4">
          <Card className="bg-muted/30">
            <CardContent className="p-6">
              <h3 className="font-semibold text-foreground mb-4">What's Next?</h3>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild variant="hero">
                  <Link to="/colleges">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Explore Colleges
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/courses">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    View Courses
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/scholarships">
                    <Trophy className="mr-2 h-4 w-4" />
                    Find Scholarships
                  </Link>
                </Button>
                <Button variant="secondary" onClick={() => navigate('/quiz')}>
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Retake Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}