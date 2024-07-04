export default function Notes({ notes }) {
  return (
    <div>
        <p>{notes?.data?.title}</p>
        <p>{notes?.data?.description}</p>
    </div>
  )
}

export async function getServerSideProps(context) {
    const { id } = context.params;
    // Fetch data from external API
    const res = await fetch(`https://service.pace-unv.cloud/api/notes/${id}`)
    const notes = await res.json()
    // Pass data to the page via props
    return { props: { notes } }
}

// export async function getStaticPaths() {
//     const res = await fetch('https://service.pace-unv.cloud/api/notes')
//     const notes = await res.json()
//     const paths = notes.data.map((item) => ({
//         params: {
//             id: item.id
//         }
//     }));

//     return {
//       paths,
//       fallback: true,
//     }
//   }

// export async function getStaticProps(context) {
//     const { id } = context.params;
//     const res = await fetch(`https://service.pace-unv.cloud/api/notes/${id}`)
//     const notes = await res.json()
//     return { props: { notes }, revalidate: 5 }
// }