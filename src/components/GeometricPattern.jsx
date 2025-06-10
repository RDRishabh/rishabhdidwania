const GeometricBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Top right geometric lines */}
      <svg className="absolute top-20 right-20 w-96 h-96 opacity-10" viewBox="0 0 400 400">
        <path d="M50 50 L350 100 L300 300 L100 250 Z" stroke="rgba(255,255,255,0.1)" strokeWidth={1} fill="none" />
        <path d="M100 80 L320 120 L280 280 L80 240 Z" stroke="rgba(255,255,255,0.05)" strokeWidth={1} fill="none" />
        <circle cx={200} cy={200} r={80} stroke="rgba(255,255,255,0.08)" strokeWidth={1} fill="none" />
        <circle cx={200} cy={200} r={120} stroke="rgba(255,255,255,0.04)" strokeWidth={1} fill="none" />
      </svg>

      {/* Bottom left geometric elements */}
      <svg className="absolute bottom-20 left-80 w-64 h-64 opacity-5" viewBox="0 0 200 200">
        <polygon points="50,20 80,80 20,80" stroke="rgba(255,255,255,0.1)" strokeWidth={1} fill="none" />
        <polygon points="120,40 160,100 80,100" stroke="rgba(255,255,255,0.05)" strokeWidth={1} fill="none" />
        <line x1={0} y1={150} x2={200} y2={150} stroke="rgba(255,255,255,0.03)" strokeWidth={1} />
        <line x1={100} y1={0} x2={100} y2={200} stroke="rgba(255,255,255,0.03)" strokeWidth={1} />
      </svg>
    </div>
  );
};

export default GeometricBackground;
