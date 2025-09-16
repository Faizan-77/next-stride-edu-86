import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  Users, 
  Target, 
  Award,
  Heart,
  Lightbulb,
  TrendingUp,
  Shield
} from 'lucide-react';

export default function About() {
  const teamMembers = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Chief Education Officer',
      image: '/api/placeholder/150/150',
      bio: '15+ years in educational counseling and career guidance'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Technology Lead',
      image: '/api/placeholder/150/150',
      bio: 'AI and machine learning expert with focus on educational technology'
    },
    {
      name: 'Anita Desai',
      role: 'Student Success Manager',
      image: '/api/placeholder/150/150',
      bio: 'Passionate about helping students achieve their academic goals'
    },
    {
      name: 'Vikram Singh',
      role: 'Career Counselor',
      image: '/api/placeholder/150/150',
      bio: 'Industry expert with connections across various sectors'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Personalized Guidance',
      description: 'Every student is unique. We provide tailored recommendations based on individual strengths, interests, and goals.'
    },
    {
      icon: Shield,
      title: 'Trusted Expertise',
      description: 'Our team of education experts and counselors bring decades of experience in guiding students to success.'
    },
    {
      icon: Heart,
      title: 'Student-Centric Approach',
      description: 'We put students first, ensuring every decision and recommendation serves their best interests and future success.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation in Education',
      description: 'We leverage cutting-edge technology and AI to provide the most accurate and relevant guidance possible.'
    }
  ];

  const milestones = [
    { year: '2020', event: 'EduNav founded with a vision to democratize career guidance' },
    { year: '2021', event: 'Launched AI-powered aptitude testing and career matching' },
    { year: '2022', event: 'Reached 10,000+ students across India' },
    { year: '2023', event: 'Partnered with 500+ colleges and universities' },
    { year: '2024', event: 'Expanded to include parent dashboard and ROI calculator' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold">
              About EduNav
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Empowering students and parents with data-driven insights and personalized guidance 
              to make informed educational and career decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To bridge the gap between student potential and career opportunities by providing 
                  accessible, personalized, and data-driven educational guidance that empowers 
                  every student to make informed decisions about their future.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A world where every student has access to quality career guidance and can 
                  confidently pursue their dreams, regardless of their background or circumstances.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-card shadow-hover">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">50,000+</h3>
                  </div>
                  <p className="text-muted-foreground">Students successfully guided to their ideal career paths</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-hover">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <GraduationCap className="h-8 w-8 text-success" />
                    <h3 className="text-xl font-semibold">500+</h3>
                  </div>
                  <p className="text-muted-foreground">Partner colleges and educational institutions</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-hover">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <Award className="h-8 w-8 text-warning" />
                    <h3 className="text-xl font-semibold">95%</h3>
                  </div>
                  <p className="text-muted-foreground">Student satisfaction rate with our recommendations</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and how we serve our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-hover">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our mission to transform educational guidance.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div className="flex-shrink-0 w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">{milestone.year}</span>
                </div>
                <Card className="flex-1 shadow-card hover:shadow-hover transition-all">
                  <CardContent className="p-6">
                    <p className="text-lg text-foreground">{milestone.event}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate experts dedicated to your educational success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center shadow-hover">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 bg-muted"
                  />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-hero rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students who have discovered their perfect career path with EduNav.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                <Users className="mr-2 h-5 w-5" />
                Get Started Today
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}