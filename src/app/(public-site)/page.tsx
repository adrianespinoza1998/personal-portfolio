import { ButtonWithLink, Container } from "@/components";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 justify-center items-center">
      <h1 className="text-5xl">Adrian Espinoza</h1>
      <Container
        variant="outlined"
        classes="flex-col justify-center items-center w-1/2"
      >
        <h2 className="text-4xl">Developer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam corporis
          veniam dolorum sint ullam saepe tenetur asperiores, vitae sit
          exercitationem eveniet, facilis earum ad eaque! Ratione architecto
          facere eveniet rem!
        </p>
      </Container>
      <div className="flex gap-4">
        <Container
          classes="flex-col justify-center gap-2"
          color="sky"
          variant="outlined"
        >
          <p className="text-3xl">Container 1</p>
          Texto de prueba 1
          <ButtonWithLink color="sky" href="/contact" text="Button 1" />
        </Container>
        <Container
          classes="flex-col justify-center gap-2"
          color="sky"
          variant="outlined"
        >
          <p className="text-3xl">Container 2</p>
          Texto de prueba 2
          <ButtonWithLink color="sky" href="/contact" text="Button 2" />
        </Container>
        <Container
          classes="flex-col justify-center gap-2"
          color="pink"
          variant="outlined"
        >
          <p className="text-3xl">Container 3</p>
          Texto de prueba 3
          <ButtonWithLink href="/contact" text="Button 3" />
        </Container>
        <Container
          classes="flex-col justify-center gap-2"
          color="purple"
          variant="outlined"
        >
          <p className="text-3xl">Container 4</p>
          Texto de prueba 4
          <ButtonWithLink color="purple" href="/contact" text="Button 4" />
        </Container>
      </div>
    </div>
  );
}
