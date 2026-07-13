

export default function Home() {
  return (
    <main 
      className="min-h-screen bg-[#292824] text-[#E5D8C0] p-12"
      style={{ padding: "3rem", fontFamily: "system-ui"}}>
      <h1 className="font-cormorant text-5xl">Gwennimations</h1>

      <p style={{ fontSize: "1.2rem", maxWidth: "600px" }}>
        A journey of thought and wonder, told one small story at a time.
      </p>

      <hr className="border-[#B87333] my-8" />

      <h2>About This Site</h2>
      <p style={{ maxWidth: "600px" }}>
        This is the beginning of a long-term project. I am learning to build small systems.
        The goal of this is to create a space that reflects how I think and create,
        and to eventually create a community in which ideas are shared and grown, a virtual third place.
      </p>

      <h2>Current Status</h2>
      <p>Phase 2: Foundation - layout and design components</p>

      <h2>Future Trajectory</h2>
      <p>
        Gradual expansion of this space to include writing, projects, and experiments.
      </p>

      <p style={{ marginTop: "3rem", opacity: 0.6 }}>
        Built with Next.js • First deployed July 2026
      </p>
    </main>
  );
}
