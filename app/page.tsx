import Image from "next/image";

export default function Home() {
  return (
    <main style={{ padding: "3rem", fontFamily: "system-ui"}}>
      <h1>Gwennimations</h1>

      <p style={{ fontSize: "1.2rem", maxWidth: "600px" }}>
        A journey of thought and wonder, told one small story at a time.
      </p>

      <hr style={{ margin: "2rem 0" }} />

      <h2><b>About This Site</b></h2>
      <p style={{ maxWidth: "600px" }}>
        This is the beginning of a long-term project. I am learning to build small systems.
        The goal of this is to create a space that reflects how I think and create,
        and to eventually create a community in which ideas are shared and grown, a virtual third place.
      </p>

      <h2><b>Current Status</b></h2>
      <p>Phase 1: Foundation - project setup and first dpeloyment</p>

      <h2><b>What's Next</b></h2>
      <p>
        Gradual expansion of this space to include writing, projects, and experiments.
      </p>

      <p style={{ marginTop: "3rem", opacity: 0.6 }}>
        Built with Next.js • First deployed July 2026
      </p>
    </main>
  );
}
