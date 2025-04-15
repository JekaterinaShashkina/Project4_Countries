const About = () => {
    return (
        <div style={{ padding: "1rem", maxWidth: "900px" }}>
        <h2>About this project</h2>
        <p>
          This web application was built as a React project using the{" "}
          <a href="https://restcountries.com/" target="_blank" rel="noreferrer">
            REST Countries API
          </a>{" "}
          to display information about countries around the world.
        </p>
        <p>
          The app allows users to search for countries, view basic info such as
          capital, population, area, languages and currencies, and explore detailed
          data by clicking on a country.
        </p>
        <p>
          It is built with <strong>React</strong> functional components, uses{" "}
          <strong>hooks</strong> for state and effect management, and{" "}
          <strong>React Router</strong> for client-side navigation.
        </p>
        <p>
          For better user experience, it includes pagination and embedded Google
          Maps for each country.
        </p>
        <p>
          Created by Jekaterina Shashkina — 2025
        </p>
      </div>
    )
}
export default About