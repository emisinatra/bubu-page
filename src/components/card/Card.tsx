interface Props {
  title: string;
  subtitle: string;
  body: string;
}

export const Card: React.FC<Props> = ({ title, subtitle, body }) => {
  return (
    <div className="card-container">
      <section className="title-container">
        <h1>{title}</h1>
      </section>
      <section className="body-container">
        <h4> {subtitle}</h4>
        <p>{body}</p>
      </section>
    </div>
  );
};
