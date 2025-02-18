import styled from "styled-components";

const Ohje = () => {
  return (
    <Container>
      <Header>
        <Title>Hapanjuurileivän valmistusohjeet</Title>
        <RecipeBanner>
          <BannerItem>
            <BannerIcon>🍞</BannerIcon>
            <BannerText><Strong>TUOTTO:</Strong> 2 leipää</BannerText>
          </BannerItem>
          <BannerItem>
            <BannerIcon>⏱️</BannerIcon>
            <BannerText><Strong>AIKA:</Strong> 2 viikkoa (tai 2 päivää aktiivisella juurella)</BannerText>
          </BannerItem>
        </RecipeBanner>
      </Header>
      
      <Section>
        <SectionTitle>Ainekset</SectionTitle>
        
        <IngredientGroup>
          <GroupTitle>Juurta ja esitaikinaa varten:</GroupTitle>
          <IngredientList>
            <IngredientItem>1000 grammaa valkoisista vehnäjauhoja</IngredientItem>
            <IngredientItem>1000 grammaa täysjyvävehnäjauhoja</IngredientItem>
          </IngredientList>
        </IngredientGroup>
        
        <IngredientGroup>
          <GroupTitle>Leipää varten:</GroupTitle>
          <IngredientList>
            <IngredientItem>200 grammaa esitaikinaa</IngredientItem>
            <IngredientItem>900 grammaa valkoisista vehnäjauhoja</IngredientItem>
            <IngredientItem>100 grammaa täysjyvävehnäjauhoja, sekä lisää pölytykseen</IngredientItem>
            <IngredientItem>20 grammaa hienoa merisuolaa</IngredientItem>
            <IngredientItem>100 grammaa riisijauhoja</IngredientItem>
          </IngredientList>
        </IngredientGroup>
      </Section>
      
      <Section>
        <SectionTitle>Valmistusohjeet</SectionTitle>
        
        <StepItem>
          <StepHeader>
            <StepNumber>1</StepNumber>
            <StepTitle>Valmista juuri</StepTitle>
          </StepHeader>
          <StepContent>
            Yhdistä 1000 grammaa valkoisista vehnäjauhoja 1000 gramman täysjyvävehnäjauhojen kanssa. Laita 100 grammaa lämmintä vettä (noin 26-27°C) pieneen purkkiin tai astiaan ja lisää 100 grammaa jauhoseosta. Sekoita sormilla, kunnes seos on täysin tasainen ja koostumukseltaan paksun taikinan kaltainen. Peitä pyyheliinalla ja anna seistä huoneenlämmössä, kunnes seos alkaa kuplia ja kohota, 2-3 päivää.
          </StepContent>
        </StepItem>
        
        <StepItem>
          <StepHeader>
            <StepNumber>2</StepNumber>
            <StepTitle>Aloita säännöllinen ruokinta</StepTitle>
          </StepHeader>
          <StepContent>
            Kun juuri alkaa osoittaa aktiivisuuden merkkejä, aloita säännöllinen ruokinta. Pidä juuri huoneenlämmössä ja samaan aikaan joka päivä heitä pois 80 prosenttia juuresta ja ruoki jäljellä olevaa juuri yhtä suurilla osilla lämmintä vettä ja valkoinen-täysjyvä jauhoseosta (50 grammaa kumpaakin on riittävä). Kun juuri alkaa nousta ja laskea ennustettavasti ja saa hieman happaman tuoksun, se on valmis; tämä kestää noin 1 viikon. (Säilytä loput jauhoseoksesta esitaikinaa varten.)
          </StepContent>
        </StepItem>
        
        <StepItem>
          <StepHeader>
            <StepNumber>3</StepNumber>
            <StepTitle>Valmista esitaikina</StepTitle>
          </StepHeader>
          <StepContent>
            Leivontaa edeltävänä iltana heitä pois kaikki paitsi 1 ruokalusikallinen kypsää juurta. Sekoita jäljellä oleva juuri 200 gramman lämpimän veden kanssa ja sekoita kädelläsi tasaiseksi. Lisää 200 grammaa valkoinen-täysjyvä jauhoseosta ja sekoita hyvin. Peitä pyyheliinalla ja anna levätä huoneenlämmössä 12 tuntia tai kunnes se on ilmava ja kohonnut ulkonäöltään. Testataksesi valmiutta, pudota ruokalusikallinen esitaikinaa huoneenlämpöiseen vesiastiaan; jos se kelluu, se on valmista käytettäväksi. Jos ei, anna käydä pidempään.
          </StepContent>
        </StepItem>
        
        <StepItem>
          <StepHeader>
            <StepNumber>4</StepNumber>
            <StepTitle>Valmista taikina</StepTitle>
          </StepHeader>
          <StepContent>
            Isossa kulhossa yhdistä 200 grammaa esitaikinaa 700 gramman lämpimän veden kanssa ja sekoita tasaiseksi. (Säilytä loput esitaikinasta tulevia leipiä varten; katso huomautus alla.)
          </StepContent>
        </StepItem>
        
        <StepItem>
          <StepHeader>
            <StepNumber>5</StepNumber>
            <StepTitle>Lisää jauhot</StepTitle>
          </StepHeader>
          <StepContent>
            Lisää kulhoon 900 grammaa valkoisista vehnäjauhoja ja 100 grammaa täysjyvävehnäjauhoja ja käytä käsiäsi sekoittaaksesi, kunnes kuivia jauhojen jälkiä ei ole näkyvissä. Taikina on tahmeaa ja epätasaista. Peitä kulho pyyheliinalla ja anna taikinan levätä 25-40 minuuttia huoneenlämmössä.
          </StepContent>
        </StepItem>
        
        <StepItem>
          <StepHeader>
            <StepNumber>6</StepNumber>
            <StepTitle>Lisää suola</StepTitle>
          </StepHeader>
          <StepContent>
            Lisää 20 grammaa hienoa merisuolaa ja 50 grammaa lämmintä vettä. Käytä käsiäsi suolan ja veden perusteelliseen sekoittamiseen taikinaan. Taikina alkaa hajota, mutta jatka sekoittamista; se yhdistyy taas.
          </StepContent>
        </StepItem>
        
        <StepItem>
          <StepHeader>
            <StepNumber>7</StepNumber>
            <StepTitle>Kohota ja taittele</StepTitle>
          </StepHeader>
          <StepContent>
            Peitä taikina pyyheliinalla ja siirrä lämpimään ympäristöön, ihanteellisesti 24-27°C (kuten ikkunan lähelle aurinkoisessa huoneessa tai sammutetun uunin sisälle). Anna taikinan nousta 30 minuuttia. Taittele taikina kastamalla käsi veteen, tarttumalla taikinan alaosaan yhdestä neljänneksestä ja venyttämällä se taikinan muun osan päälle. Toista tämä toiminta vielä 3 kertaa, kääntäen kulhoa neljänneskierroksen jokaisen taitoksen jälkeen. Tee tämä joka puolen tunnin välein 2,5 tunnin ajan (yhteensä 3 tuntia). Taikinan pitäisi olla ilmava ja kasvaa tilavuudeltaan 20-30 prosenttia. Jos ei, jatka kohotusta ja taittelua tunnin verran lisää.
          </StepContent>
        </StepItem>
        
        <StepItem>
          <StepHeader>
            <StepNumber>8</StepNumber>
            <StepTitle>Muotoile taikinapallot</StepTitle>
          </StepHeader>
          <StepContent>
            Siirrä taikina työtasolle ja pölytetä päälle jauhoja. Käytä taikinankaavinta leikataksesi taikinan 2 yhtä suureen osaan ja käännä ne ympäri, jotta jauhoiset puolet ovat alaspäin. Taita kunkin palan leikattu puoli itsensä päälle, jotta pinnalla olevat jauhot jäävät kokonaan leivän ulkopuolelle; tästä tulee kuori. Muotoile taikina kireiksi palloiksi. Aseta taikinapallot työtasolle, peitä pyyheliinalla ja anna levätä 30 minuuttia.
          </StepContent>
        </StepItem>
        
        <StepItem>
          <StepHeader>
            <StepNumber>9</StepNumber>
            <StepTitle>Valmistele kohotusastiat</StepTitle>
          </StepHeader>
          <StepContent>
            Sekoita 100 grammaa täysjyvävehnäjauhoja ja 100 grammaa riisijauhoja. Vuoraa kaksi 25-30 cm leivän kohotuskoria tai sekoituskulhoa pyyheliinoilla. Käytä osa jauhoista pyyheliinojen runsaaseen jauhotukseen (säilytä loput seoksesta).
          </StepContent>
        </StepItem>
        
        <StepItem>
          <StepHeader>
            <StepNumber>10</StepNumber>
            <StepTitle>Lopullinen muotoilu</StepTitle>
          </StepHeader>
          <StepContent>
            Pölytä pallot täysjyvävehnäjauhoilla. Käytä taikinankaavinta kääntääksesi ne työtasolle niin, että jauhoiset puolet ovat alaspäin. Ota yksi pallo, ja aloittaen lähinnä sinua olevasta reunasta, vedä taikinan alaosan 2 kulmaa alas kohti itseäsi, sitten taita ne taikinan keskiosaan. Toista tämä toiminta oikealla ja vasemmalla puolella, vetäen reunat ulos ja taitellen ne keskustan päälle. Lopuksi nosta yläkulmat ylös ja taita alas edellisten taitosten päälle. (Kuvittele, että taittelet paperinpalan sisäänpäin kaikista 4 reunasta.) Pyöritä taikina ympäri niin, että taitettu puoli tulee leivän pohjaksi. Muotoile sileäksi, kireäksi palloksi. Toista toiselle pallolle.
          </StepContent>
        </StepItem>
        
        <StepItem>
          <StepHeader>
            <StepNumber>11</StepNumber>
            <StepTitle>Lopullinen kohotus</StepTitle>
          </StepHeader>
          <StepContent>
            Siirrä pallot, saumapuoli ylöspäin, valmisteltuihin koreihin. Peitä pyyheliinalla ja palauta taikina 24-27°C lämpötilaan 3-4 tunniksi. (Tai anna taikinan nousta 10-12 tuntia jääkaapissa. Tuo takaisin huoneenlämpöön ennen paistamista.)
          </StepContent>
        </StepItem>
        
        <StepItem>
          <StepHeader>
            <StepNumber>12</StepNumber>
            <StepTitle>Paista ensimmäinen leipä</StepTitle>
          </StepHeader>
          <StepContent>
            Noin 30 minuuttia ennen paistamista aseta valurautapata tai kannellinen valurautakattila uuniin ja kuumenna 260°C:seen. Pölytä taikinoiden päät, jotka ovat edelleen koreissaan, täysjyvävehnä/riisijauho-seoksella. Poista kuumennettu pata varovasti uunista ja käännä 1 leipä hellävaroen pataan saumapuoli alaspäin. Käytä lamea (leipurin terää) tai partaterää viiltääksesi leivän päälle muutaman viillon, jotta leipä voi laajentua, peitä ja siirrä uuniin. Laske lämpötila 230°C:seen ja paista 20 minuuttia. Poista kansi varovasti (höyryä saattaa vapautua) ja paista vielä 20 minuuttia tai kunnes kuori on rikas, kultaisen ruskea.
          </StepContent>
        </StepItem>
        
        <StepItem>
          <StepHeader>
            <StepNumber>13</StepNumber>
            <StepTitle>Jäähdytä ja paista toinen leipä</StepTitle>
          </StepHeader>
          <StepContent>
            Siirrä leipä ritilälle jäähtymään vähintään 15 minuutiksi ennen viipalointia. Leivän pohjan pitäisi kuulostaa ontolta, kun sitä napautetaan. Nosta uunin lämpötila takaisin 260°C:seen, puhdista pata ja toista tämä prosessi toisen leivän kanssa.
          </StepContent>
        </StepItem>
        
        <TipBox>
          <TipHeader>
            <TipIcon>💡</TipIcon>
            <TipTitle>VINKKI</TipTitle>
          </TipHeader>
          <TipContent>
            Jäljellä oleva esitaikina on uusi juuresi. Jatka sen ruokkimista, jos aiot leipoa pian uudestaan, tai säilytä ilmatiiviissä astiassa jääkaapissa tulevaa käyttöä varten. Kun haluat leipoa uudelleen, ala ruokkia juurta muutamaa päivää tai viikkoa etukäteen, kunnes se jälleen käyttäytyy ennustettavasti.
          </TipContent>
        </TipBox>
      </Section>
    </Container>
  );
};

export default Ohje;

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  color: #333;
  font-family: 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  background-color: #FBF9F4;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 100px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  border-bottom: 2px solid #E7DFC6;
  padding-bottom: 1.5rem;
`;

const Title = styled.h1`
  color: #8B7D5B;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

const RecipeBanner = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const BannerItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BannerIcon = styled.span`
  font-size: 1.5rem;
`;

const BannerText = styled.p`
  font-size: 1.1rem;
  color: #5C5545;
`;

const Strong = styled.span`
  font-weight: 700;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  color: #8B7D5B;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  border-bottom: 1px solid #E7DFC6;
  padding-bottom: 0.5rem;
`;

const IngredientGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const GroupTitle = styled.h3`
  color: #8B7D5B;
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
`;

const IngredientList = styled.ul`
  list-style-type: none;
  padding-left: 1rem;
`;

const IngredientItem = styled.li`
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
  
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #8B7D5B;
    font-weight: bold;
  }
`;

const StepItem = styled.div`
  margin-bottom: 2rem;
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
`;

const StepHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const StepNumber = styled.div`
  background-color: #E7DFC6;
  color: #8B7D5B;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-right: 1rem;
`;

const StepTitle = styled.h3`
  color: #8B7D5B;
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
`;

const StepContent = styled.p`
  color: #5C5545;
  font-size: 1rem;
  line-height: 1.7;
`;

const TipBox = styled.div`
  background-color: #FFF8E8;
  border: 1px solid #FAECD0;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 2.5rem;
`;

const TipHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const TipIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 0.75rem;
`;

const TipTitle = styled.h4`
  color: #C0A970;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
`;

const TipContent = styled.p`
  color: #8C7E58;
  font-size: 1rem;
  line-height: 1.7;
`;