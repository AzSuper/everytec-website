import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/5 to-primary/10"></div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main CTA content */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
              Ready to turn your
              <span className="text-gradient"> vision into reality</span>?
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who chose evrytec for their
              digital transformation. Let's build something amazing together.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="gradient-primary shadow-primary hover:shadow-lg transition-all duration-300 group"
              >
                <MessageCircle size={20} className="mr-2" />
                Start Free Consultation
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Calendar size={20} className="mr-2" />
                Schedule a Call
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t border-border/50">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-lg">⚡</span>
                </div>
                <h4 className="mb-2">Fast Turnaround</h4>
                <p className="text-sm text-muted-foreground">
                  Get your MVP in 4-6 weeks
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-lg">🎯</span>
                </div>
                <h4 className="mb-2">Fixed Price</h4>
                <p className="text-sm text-muted-foreground">
                  No surprises, clear pricing
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-lg">🛡️</span>
                </div>
                <h4 className="mb-2">100% Guarantee</h4>
                <p className="text-sm text-muted-foreground">
                  Your satisfaction guaranteed
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
