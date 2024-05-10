import { useMediaQuery } from "react-responsive";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { PiCaretLeft } from "react-icons/pi";

import * as Layout from "../../components/Layouts";
import { Tag } from "../../components/Tag";
import { SideMenu } from "../../components/SideMenu";
import { Section } from "../../components/Section";
import { Counter } from "../../components/Counter";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";

import { DetailsContainer, Content, DetailsX, CounterSection } from "./styles";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export function Details({ isAdmin = true }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const navigate = useNavigate();
  const params = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [data, setData] = useState(null);

  function handleBackHome() {
    navigate(-1);
  }

  function handleRedirectToEditDish(dish_id) {
    navigate(`/edit/${dish_id}`);
  }

  useEffect(() => {
    if (!isMobile && isMenuOpen === true) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    async function fetchDishDetails() {
      try {
        const response = await api.get(`/dishes/${params.id}`);
        setData(response.data);
      } catch (error) {
        toast.error("Erro ao encontrar este prato.");
        navigate("/");
      }
    }
    fetchDishDetails();
  }, []);

  if (!data) {
    return;
  }

  const imageURL = `${api.defaults.baseURL}/files/${data.image}`;

  return (
    <DetailsContainer>
      <SideMenu
        isMenuOpen={isMenuOpen}
        isMenuClose={() => setIsMenuOpen(false)}
      />

      <Header onOpenMenu={() => setIsMenuOpen(true)} />

      <Layout.Page>
        <main>
          <Content>
            <div>
              <a onClick={handleBackHome}>
                <PiCaretLeft size={32} />
                Voltar
              </a>
            </div>

            <div className="Details">
              <img src={imageURL} alt={`Imagem do prato ${data.name}`} />

              <DetailsX>
                <Section>
                  <h1>{data.name}</h1>
                  <p>{data.description}</p>
                </Section>

                {data.ingredients && (
                  <Section className="tags-section">
                    {data.ingredients.map((ingredient) => (
                      <Tag
                        key={String(ingredient.id)}
                        title={ingredient.ingredient}
                      />
                    ))}
                  </Section>
                )}
                <CounterSection>
                  {isAdmin ? null : <Counter />}

                  <Button
                    title={`Editar prato`}
                    onClick={() => handleRedirectToEditDish(data.id)}
                  />

                  {!isAdmin && <Button title={`incluir - R$ ${data.price}`} />}
                </CounterSection>
              </DetailsX>
            </div>
          </Content>
        </main>
      </Layout.Page>

      <Footer />
    </DetailsContainer>
  );
}