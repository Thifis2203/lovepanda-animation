import heroImage from "../assets/hero.jpg";
import photo1 from "../assets/photo1.jpg";
import photo3 from "../assets/photo3.jpg";

const videoBase = import.meta.env.BASE_URL || "/";

const galleryData = [
  {
    image: photo1,
    date: "Momento 01",
    title: "Nosso começo",
    caption: "Essa foi a nossa primeira foto juntas, tirada no primeiro dia que dormimos juntas, deixei você fazer skincare e eu tava morrendo de rir com você pedindo pra eu vestir saia kkkkkkkk",
  },
  {
    video: `${videoBase}videos/photo3.mp4`,
    poster: photo1,
    image: photo1,
    date: "Momento 02",
    title: "Risadas favoritas",
    caption: "Esse vídeo é um dos meus favoritos, porque mostra como o meu sorriso é mais verdadeiro quando estou com você, e como a gente se diverte mesmo nas coisas mais simples.",
  },
  {
    image: photo3,
    date: "Momento 03",
    title: "Um dia inesquecível",
    caption: "Aqui você me deu meu primeiro buquê de flores e foi a sua primeira vez entregando um buquê também, pra mim sempre vai ser um dia inesquecível.",
  },
]

export default galleryData
