import dynamic from "next/dynamic";
// import AboutContainer from "@/containers/AboutContainer";

const AboutContainer = dynamic(() => import('@/containers/AboutContainer'))

export default function Home() {
  return <AboutContainer />
}