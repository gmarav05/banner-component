import Banner from "./Banner"

export default function App() {
   const bannerContents = [
    {
      status: "success",
      title: "Congratulations!",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
    },
    {
      status: "warning",
      title: "Attention",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
    },
    {
      status: "error",
      title: "There is a problem with your application",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
    },
    {
      status: "neutral",
      title: "Update available",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
    },
    {
      status: "success",
      title: "Congratulations!",
    },
    {
      status: "warning",
      title: "Attention",
    },
    {
      status: "error",
      title: "There is a problem with your application",
    },
    {
      status: "neutral",
      title: "Update available",
    },
  ]

  const banners = bannerContents.map((banner, index) => {
     return (<Banner key={index} title={banner.title} status={banner.status}>
            {banner.text}
            </Banner>
     )
  })

  return (
    <>
      <main className="font-inter overflow-x-hidden">
          <h2 className="text-2xl font-semibold mb-4">Banners</h2>
          <div className="flex flex-col gap-4">{banners}</div>
       </main>   
    </>
  )
}