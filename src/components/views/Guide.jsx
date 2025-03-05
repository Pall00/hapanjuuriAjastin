import { Container, Header, Title } from '../../styles/components'
import {
  RecipeBanner,
  BannerItem,
  BannerIcon,
  BannerText,
  Strong,
  Section,
  SectionTitle,
  IngredientGroup,
  GroupTitle,
  IngredientList,
  IngredientItem,
  InstructionSteps,
  StepItem,
  StepHeader,
  StepNumber,
  StepTitle,
  StepContent,
  TipBox,
  TipHeader,
  TipIcon,
  TipTitle,
  TipContent,
} from '../../styles/pages/guide'

const Guide = () => {
  return (
    <Container>
      <Header>
        <Title>Hapanjuurileivän valmistusohjeet</Title>
        <RecipeBanner>
          <BannerItem>
            <BannerIcon>🍞</BannerIcon>
            <BannerText>
              <Strong>TUOTTO:</Strong> 2 leipää
            </BannerText>
          </BannerItem>
          <BannerItem>
            <BannerIcon>⏱️</BannerIcon>
            <BannerText>
              <Strong>AIKA:</Strong> 2 viikkoa (tai 2 päivää aktiivisella juurella)
            </BannerText>
          </BannerItem>
        </RecipeBanner>
      </Header>

      <Section>
        <SectionTitle>Ainekset</SectionTitle>

        <IngredientGroup>
          <GroupTitle>Juurta ja esitaikinaa varten:</GroupTitle>
          <IngredientList>
            <IngredientItem>1000 grammaa valkoisia vehnäjauhoja</IngredientItem>
            <IngredientItem>1000 grammaa täysjyvävehnäjauhoja</IngredientItem>
          </IngredientList>
        </IngredientGroup>

        <IngredientGroup>
          <GroupTitle>Leipää varten:</GroupTitle>
          <IngredientList>
            <IngredientItem>200 grammaa esitaikinaa</IngredientItem>
            <IngredientItem>900 grammaa valkoisia vehnäjauhoja</IngredientItem>
            <IngredientItem>100 grammaa täysjyvävehnäjauhoja</IngredientItem>
            <IngredientItem>20 grammaa hienoa merisuolaa</IngredientItem>
            <IngredientItem>100 grammaa riisijauhoja</IngredientItem>
          </IngredientList>
        </IngredientGroup>
      </Section>

      <Section>
        <SectionTitle>Valmistusohjeet</SectionTitle>

        <InstructionSteps>
          <StepItem>
            <StepHeader>
              <StepNumber>1</StepNumber>
              <StepTitle>Valmista juuri</StepTitle>
            </StepHeader>
            <StepContent>
              Yhdistä 1000 grammaa valkoisia vehnäjauhoja 1000 gramman täysjyvävehnäjauhojen kanssa.
              Laita 100 grammaa lämmintä vettä (noin 26-27°C) pieneen purkkiin tai astiaan ja lisää
              100 grammaa jauhoseosta. Sekoita sormilla, kunnes seos on täysin tasainen ja
              koostumukseltaan paksun taikinan kaltainen. Peitä pyyheliinalla ja anna seistä
              huoneenlämmössä, kunnes seos alkaa kuplia ja kohota, 2-3 päivää.
            </StepContent>
          </StepItem>

          <StepItem>
            <StepHeader>
              <StepNumber>2</StepNumber>
              <StepTitle>Aloita säännöllinen ruokinta</StepTitle>
            </StepHeader>
            <StepContent>
              Kun juuri alkaa osoittaa aktiivisuuden merkkejä, aloita säännöllinen ruokinta. Pidä
              juuri huoneenlämmössä ja samaan aikaan joka päivä heitä pois 80 prosenttia juuresta ja
              ruoki jäljellä olevaa juuri yhtä suurilla osilla lämmintä vettä ja valkoinen-täysjyvä
              jauhoseosta (50 grammaa kumpaakin riittää). Kun juuri alkaa nousta ja laskea
              ennustettavasti ja saa hieman happaman tuoksun, se on valmis; tämä kestää noin 1
              viikon. (Säilytä loput jauhoseoksesta esitaikinaa varten.)
            </StepContent>
          </StepItem>

          <StepItem>
            <StepHeader>
              <StepNumber>3</StepNumber>
              <StepTitle>Valmista esitaikina</StepTitle>
            </StepHeader>
            <StepContent>
              Leivontaa edeltävänä iltana heitä pois kaikki paitsi 1 ruokalusikallinen kypsää
              juurta. Sekoita jäljellä oleva juuri 200 gramman lämpimän veden kanssa ja sekoita
              kädelläsi tasaiseksi. Lisää 200 grammaa valkoinen-täysjyvä jauhoseosta ja sekoita
              hyvin. Peitä pyyheliinalla ja anna levätä huoneenlämmössä 12 tuntia tai kunnes se on
              ilmava ja kohonnut ulkonäöltään. Testataksesi valmiutta, pudota ruokalusikallinen
              esitaikinaa huoneenlämpöiseen vesiastiaan; jos se kelluu, se on valmista
              käytettäväksi. Jos ei, anna käydä pidempään.
            </StepContent>
          </StepItem>

          <StepItem>
            <StepHeader>
              <StepNumber>4</StepNumber>
              <StepTitle>Valmista taikina</StepTitle>
            </StepHeader>
            <StepContent>
              Isossa kulhossa yhdistä 200 grammaa esitaikinaa 700 gramman lämpimän veden kanssa ja
              sekoita tasaiseksi. (Säilytä loput esitaikinasta tulevia leipiä varten; katso
              huomautus lopussa.)
            </StepContent>
          </StepItem>

          <StepItem>
            <StepHeader>
              <StepNumber>5</StepNumber>
              <StepTitle>Lisää jauhot</StepTitle>
            </StepHeader>
            <StepContent>
              Lisää kulhoon 900 grammaa valkoisia vehnäjauhoja ja 100 grammaa täysjyvävehnäjauhoja
              ja käytä käsiäsi sekoittaaksesi, kunnes kuivia jauhojen jälkiä ei ole näkyvissä.
              Taikina on tahmeaa ja epätasaista. Peitä kulho pyyheliinalla ja anna taikinan levätä
              25-40 minuuttia huoneenlämmössä.
            </StepContent>
          </StepItem>

          <StepItem>
            <StepHeader>
              <StepNumber>6</StepNumber>
              <StepTitle>Lisää suola</StepTitle>
            </StepHeader>
            <StepContent>
              Lisää 20 grammaa hienoa merisuolaa ja 50 grammaa lämmintä vettä. Käytä käsiäsi suolan
              ja veden perusteelliseen sekoittamiseen taikinaan. Taikina alkaa hajota, mutta jatka
              sekoittamista; se yhdistyy taas.
            </StepContent>
          </StepItem>

          <StepItem>
            <StepHeader>
              <StepNumber>7</StepNumber>
              <StepTitle>Kohota ja taittele</StepTitle>
            </StepHeader>
            <StepContent>
              Peitä taikina pyyheliinalla ja siirrä lämpimään ympäristöön, ihanteellisesti 24-27°C
              (kuten ikkunan lähelle aurinkoisessa huoneessa tai sammutetun uunin sisälle valo
              päällä). Anna taikinan nousta 30 minuuttia. Taittele taikina kastamalla käsi veteen,
              tarttumalla taikinan alaosaan yhdestä neljänneksestä ja venyttämällä se taikinan muun
              osan päälle. Toista tämä toiminta vielä 3 kertaa, kääntäen kulhoa neljänneskierroksen
              jokaisen taitoksen jälkeen. Tee tämä joka puolen tunnin välein 2,5 tunnin ajan
              (yhteensä 3 tuntia). Taikinan pitäisi olla ilmava ja kasvaa tilavuudeltaan 20-30
              prosenttia. Jos ei, jatka kohotusta ja taittelua tunnin verran lisää.
            </StepContent>
          </StepItem>

          <StepItem>
            <StepHeader>
              <StepNumber>8</StepNumber>
              <StepTitle>Muotoile taikinapallot</StepTitle>
            </StepHeader>
            <StepContent>
              Siirrä taikina työtasolle ja pölytetä päälle jauhoja. Käytä taikinankaavinta
              leikataksesi taikinan 2 yhtä suureen osaan ja käännä ne ympäri, jotta jauhoiset puolet
              ovat alaspäin. Taita kunkin palan leikattu puoli itsensä päälle, jotta pinnalla olevat
              jauhot jäävät kokonaan leivän ulkopuolelle; tästä tulee kuori. Muotoile taikina
              kireiksi palloiksi. Aseta taikinapallot työtasolle, peitä pyyheliinalla ja anna levätä
              30 minuuttia.
            </StepContent>
          </StepItem>

          <StepItem>
            <StepHeader>
              <StepNumber>9</StepNumber>
              <StepTitle>Valmistele kohotusastiat</StepTitle>
            </StepHeader>
            <StepContent>
              Sekoita 100 grammaa täysjyvävehnäjauhoja ja 100 grammaa riisijauhoja. Vuoraa kaksi
              25-30 cm leivän kohotuskoria tai sekoituskulhoa pyyheliinoilla. Käytä osa jauhoista
              pyyheliinojen runsaaseen jauhotukseen (säilytä loput seoksesta).
            </StepContent>
          </StepItem>

          <StepItem>
            <StepHeader>
              <StepNumber>10</StepNumber>
              <StepTitle>Lopullinen muotoilu</StepTitle>
            </StepHeader>
            <StepContent>
              Pölytä pallot täysjyvävehnäjauhoilla. Käytä taikinankaavinta kääntääksesi ne
              työtasolle niin, että jauhoiset puolet ovat alaspäin. Ota yksi pallo, ja aloittaen
              lähinnä sinua olevasta reunasta, vedä taikinan alaosan 2 kulmaa alas kohti itseäsi,
              sitten taita ne taikinan keskiosaan. Toista tämä toiminta oikealla ja vasemmalla
              puolella, vetäen reunat ulos ja taitellen ne keskustan päälle. Lopuksi nosta yläkulmat
              ylös ja taita alas edellisten taitosten päälle. (Kuvittele, että taittelet
              paperinpalan sisäänpäin kaikista 4 reunasta.) Pyöritä taikina ympäri niin, että
              taitettu puoli tulee leivän pohjaksi. Muotoile sileäksi, kireäksi palloksi. Toista
              toiselle pallolle.
            </StepContent>
          </StepItem>

          <StepItem>
            <StepHeader>
              <StepNumber>11</StepNumber>
              <StepTitle>Lopullinen kohotus</StepTitle>
            </StepHeader>
            <StepContent>
              Siirrä pallot, saumapuoli ylöspäin, valmisteltuihin koreihin. Peitä pyyheliinalla ja
              palauta taikina 24-27°C lämpötilaan 3-4 tunniksi. (Tai anna taikinan nousta 10-12
              tuntia jääkaapissa. Tuo takaisin huoneenlämpöön ennen paistamista.)
            </StepContent>
          </StepItem>

          <StepItem>
            <StepHeader>
              <StepNumber>12</StepNumber>
              <StepTitle>Paista ensimmäinen leipä</StepTitle>
            </StepHeader>
            <StepContent>
              Noin 30 minuuttia ennen paistamista aseta valurautapata tai kannellinen
              valurautakattila uuniin ja kuumenna 260°C:seen. Jauhoita taikinoiden päät, jotka ovat
              edelleen koreissaan, täysjyvävehnä/riisijauho-seoksella. Poista kuumennettu pata
              varovasti uunista ja käännä 1 leipä hellävaroen pataan saumapuoli alaspäin. Käytä
              lamea (leipurin terää) tai partaterää viiltääksesi leivän päälle muutaman viillon,
              jotta leipä voi laajentua, peitä ja siirrä uuniin. Laske lämpötila 230°C:seen ja
              paista 20 minuuttia. Poista kansi varovasti (höyryä saattaa vapautua) ja paista vielä
              20 minuuttia tai kunnes kuori on rikas, kultaisen ruskea.
            </StepContent>
          </StepItem>

          <StepItem>
            <StepHeader>
              <StepNumber>13</StepNumber>
              <StepTitle>Jäähdytä ja paista toinen leipä</StepTitle>
            </StepHeader>
            <StepContent>
              Siirrä leipä ritilälle jäähtymään vähintään 15 minuutiksi ennen viipalointia. Leivän
              pohjan pitäisi kuulostaa ontolta, kun sitä napautetaan. Nosta uunin lämpötila takaisin
              260°C:seen, puhdista pata ja toista tämä prosessi toisen leivän kanssa.
            </StepContent>
          </StepItem>
        </InstructionSteps>

        <TipBox>
          <TipHeader>
            <TipIcon>💡</TipIcon>
            <TipTitle>VINKKI</TipTitle>
          </TipHeader>
          <TipContent>
            Jäljellä oleva esitaikina on uusi juuresi. Jatka sen ruokkimista, jos aiot leipoa pian
            uudestaan, tai säilytä ilmatiiviissä astiassa jääkaapissa tulevaa käyttöä varten. Kun
            haluat leipoa uudelleen, ala ruokkia juurta muutamaa päivää tai viikkoa etukäteen,
            kunnes se jälleen käyttäytyy ennustettavasti.
          </TipContent>
        </TipBox>
      </Section>
    </Container>
  )
}

export default Guide
