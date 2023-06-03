import { Layout } from "@/components/Layout"

export default function Skills() {
  return (
    <Layout title="Dcm91Portfolio - Skills">
      <div className="grid h-80 px-10 pb-4">
      <div className="border-solid border-2 border-orange-900 mt-3 p-2">
        WEB DEVELOPMENT
      </div>
      <div className="border-solid border-2 border-orange-900 mt-3 p-2 grid justify-end">
        FRONT-END DEVELOPMENT
      </div>
      <div className="border-solid border-2 border-orange-900 mt-3 p-2">
        BACK-END DEVELOPMENT
      </div>
      <div className="border-solid border-2 border-orange-900 mt-3 p-2 grid justify-end">
        TOOLS
      </div>
      </div>
    </Layout>
  )
}