import { Layout } from "@/components/Layout"

export default function Skills() {
  return (
    <Layout title="Dcm91Portfolio - Skills">
      <div className="grid grid-cols-2 h-80 px-10 pb-4">
      <div className="border-solid border-2 border-orange-900">
        WEB DEVELOPMENT
      </div>
      <div className="border-solid border-2 border-orange-900">
        FRONT-END DEVELOPMENT
      </div>
      <div className="border-solid border-2 border-orange-900">
        BACK-END DEVELOPMENT
      </div>
      <div className="border-solid border-2 border-orange-900">
        TOOLS
      </div>
      </div>
    </Layout>
  )
}