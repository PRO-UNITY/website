import { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { useParams } from "react-router-dom";
import { HeroBottom } from "../../constants";
import "./HeroWidgets.css";

const HeroWidgets = () => {
  const { id } = useParams();
  const [widgets, setWidgets] = useState([]);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    const user1 = HeroBottom.filter((item) => item.id == id);
    setWidgets(user1);
  }, [id]);
  console.log(widgets);
  return (
    <Layout title={`ProUnity | ${widgets[0]?.name}`}>
      <div
        className="hero-widgets"
        style={{ backgroundImage: `url(${widgets[0]?.background})` }}
      >
        <div className="ovarlay"></div>
        <h2 className="text-white number">{widgets[0]?.number}</h2>
        <h2 className="text-white">{widgets[0]?.name}</h2>
      </div>
    </Layout>
  );
};

export default HeroWidgets;
