const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-4 text-center">
      <p className="font-display text-xl font-bold text-primary mb-2">
        IDLI <span className="text-accent">House</span>
      </p>
      <p className="font-body text-sm text-primary/60">
        © {new Date().getFullYear()} IDLI House. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
