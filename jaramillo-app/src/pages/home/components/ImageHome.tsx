import image from "../../../assets/img/2b.jpg";

export default function ImageHome() {
  return (
    <div className="home-content image-home d-none d-sm-block">
      <img
        className="hidden-xs"
        src={image}
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
}
