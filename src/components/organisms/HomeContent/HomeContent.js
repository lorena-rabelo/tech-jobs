import React from "react";
import "./homeContent.css";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import Card from "../../molecules/Card/Card";
import MainTitle from "../../atoms/MainTitle/MainTitle";

const HomeContent = ({
  titulo,
  texto,
  onClick,
  type,
  placeholder,
  value,
  onChange,
  data    //{ logo, company, position, postedAt, contract, location, languages, tools } saíram daqui pq o data entrou na l.33
}) => {
  return (
    <main>
      <MainTitle texto={titulo} />
      <section>
        <SearchBar
          texto={texto}
          onClick={onClick}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange} />
        <div>
          <h2>FILTROS</h2>
        </div>
      </section>
      <section>
        {data.length ? (
          data.map(item => {
            const { logo, company, position, postedAt, contract, location, languages, tools } = item;
            return (
              <Card
                logo={logo}
                company={company}
                position={position}
                postedAt={postedAt}
                contract={contract}
                location={location}
                languages={languages}
                tools={tools}
              />
            );
          })

        ) : (
            <h2>Nenhuma vaga encontrada</h2>
          )}

      </section>
    </main>
  );
};

export default HomeContent;