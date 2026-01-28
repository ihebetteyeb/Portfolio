import { GiAtom } from "react-icons/gi";

const Resume = () => {
  return (
    <section className="w-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30">
          <GiAtom className="w-6 h-6 text-blue-400" />
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100  to-cyan-300 bg-clip-text text-transparent">
          RESUME
        </h2>
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mb-10"></div>
      <div className="flex-1 w-full flex justify-center items-center p-4">
        <div className="w-full h-[80vh] bg-neutral-800 rounded-xl overflow-hidden  drop-shadow-xl/70">
          <embed
            id="pdfEmbed"
            src="cv.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
