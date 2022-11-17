const createView = (data) => {
  console.log(
    Object.entries(data)
      .map((item) => `<li>${item[0]}: ${item[1]}</li>`)
      .join('')
  );
  return `
    <div>
      <h2>
        Datos del formulario
      </h2>
      <ul>
        ${Object.entries(data)
          .map((item) => `<li>${item[0]}: ${item[1]}</li>`)
          .join('')}
      </ul>
    </div>
  `;
};
export default function handler(req, res) {
  const { body: formData } = req;

  res.status(200).send(createView(formData));
}
