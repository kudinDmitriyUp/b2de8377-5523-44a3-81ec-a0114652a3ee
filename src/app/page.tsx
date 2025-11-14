"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TagAbout from '@/components/sections/about/TagAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Car, CreditCard, HelpCircle, Heart, MessageSquare, Sparkles, Star, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="large"
      sizing="large"
      background="animatedGrid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Inventory", id: "inventory" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Premier Cars"
          button={{ text: "Schedule Test Drive", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Discover Your Perfect Car"
          description="Browse our premium collection of luxury and family vehicles, backed by exceptional service and competitive pricing."
          tag="Premium Collection"
          tagIcon={Car}
          buttons={[
            { text: "View Inventory", href: "inventory" },
            { text: "Schedule Visit", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763151334318-t94u87xz.jpg"
          imageAlt="Premium car showroom interior"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Why Choose Us"
          description="At Premier Cars, we combine decades of automotive expertise with personalized service to help you find the perfect vehicle that matches your lifestyle and budget."
        />
      </div>

      <div id="inventory" data-section="inventory">
        <ProductCardThree
          title="Featured Vehicles"
          description="Explore our handpicked selection of premium cars, each thoroughly inspected and ready for your test drive."
          tag="Best Deals"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "luxury-sedan",
              name: "Premium Luxury Sedan",
              price: "$45,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763151334843-o3skni0b.jpg",
              imageAlt: "Luxury sedan exterior view",
              initialQuantity: 1
            },
            {
              id: "sports-convertible",
              name: "Sports Convertible",
              price: "$62,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763151335514-f7b9asgp.jpg",
              imageAlt: "Red sports convertible",
              initialQuantity: 1
            },
            {
              id: "family-suv",
              name: "Family SUV",
              price: "$38,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763151336538-hmr1psks.jpg",
              imageAlt: "Modern family SUV",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Financing Options"
          description="Flexible financing plans to make your dream car affordable with competitive rates and terms."
          tag="Financing"
          tagIcon={CreditCard}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "standard",
              price: "3.9% APR",
              name: "Standard Financing",
              buttons: [
                { text: "Get Pre-Approved", href: "contact" },
                { text: "Learn More", href: "about" }
              ],
              features: [
                "60-month terms available",
                "No prepayment penalty",
                "Quick approval process",
                "Competitive rates"
              ]
            },
            {
              id: "premium",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "2.9% APR",
              name: "Premium Financing",
              buttons: [
                { text: "Apply Now", href: "contact" },
                { text: "Calculate Payment", href: "contact" }
              ],
              features: [
                "72-month terms available",
                "Lower monthly payments",
                "Premium customer benefits",
                "Dedicated financing specialist"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Track Record"
          description="Numbers that speak to our commitment to excellence and customer satisfaction."
          tag="Success Stats"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          metrics={[
            {
              id: "cars-sold",
              value: "2,500+",
              title: "Cars Sold",
              description: "Happy customers driving their dream cars",
              icon: Car
            },
            {
              id: "years-experience",
              value: "25",
              title: "Years",
              description: "Decades of automotive expertise",
              icon: Award
            },
            {
              id: "satisfaction",
              value: "98%",
              title: "Satisfaction",
              description: "Customer satisfaction rating",
              icon: Heart
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real experiences from satisfied customers who found their perfect vehicle with us."
          tag="Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          testimonials={[
            {
              id: "review-1",
              name: "Michael Johnson",
              role: "Business Owner",
              company: "Tech Solutions Inc",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763151337900-iv7u8d9p.jpg",
              imageAlt: "Michael Johnson portrait"
            },
            {
              id: "review-2",
              name: "Sarah Williams",
              role: "Marketing Director",
              company: "Creative Agency",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763151338656-f9nelxbt.jpg",
              imageAlt: "Sarah Williams portrait"
            },
            {
              id: "review-3",
              name: "David Chen",
              role: "Family Man",
              company: "Local Resident",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763151339420-kxrik2uv.jpg",
              imageAlt: "David Chen portrait"
            },
            {
              id: "review-4",
              name: "Emma Rodriguez",
              role: "Young Professional",
              company: "Finance Corp",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763151340214-zro606tw.jpg",
              imageAlt: "Emma Rodriguez portrait"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Get answers to common questions about our vehicles, financing, and services."
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "financing",
              title: "What financing options do you offer?",
              content: "We offer competitive financing through multiple lenders with rates starting at 2.9% APR. Our financing specialists work with you to find the best terms for your situation."
            },
            {
              id: "warranty",
              title: "Do your cars come with a warranty?",
              content: "Yes, all our vehicles come with comprehensive warranties. New cars include manufacturer warranties, while our certified pre-owned vehicles come with extended warranty options."
            },
            {
              id: "test-drive",
              title: "Can I schedule a test drive?",
              content: "Absolutely! We encourage test drives for all our vehicles. You can schedule a test drive online or by calling our showroom. We'll have the car ready for your arrival."
            },
            {
              id: "trade-in",
              title: "Do you accept trade-ins?",
              content: "Yes, we accept trade-ins and offer competitive valuations. Our team will assess your current vehicle and provide a fair trade-in value that can be applied to your new purchase."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Visit Our Showroom"
          description="Ready to find your perfect car? Contact us to schedule a visit, test drive, or get more information about our inventory and financing options."
          buttonText="Send Message"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your car preferences, budget, or any questions you have...",
            rows: 4,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Premier Cars"
          columns={[
            {
              items: [
                { label: "Our Inventory", href: "inventory" },
                { label: "Financing Options", href: "pricing" },
                { label: "Schedule Test Drive", href: "contact" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Customer Reviews", href: "testimonials" },
                { label: "Visit Showroom", href: "contact" }
              ]
            },
            {
              items: [
                { label: "FAQ", href: "faq" },
                { label: "Contact Info", href: "contact" },
                { label: "Service Center", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}