import { Container, VStack, Heading, Text, Box, Image, SimpleGrid, Link } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Index = () => {
  const caseStudies = [
    {
      title: "Rediseño de E-commerce",
      description: "Mejora de la experiencia de usuario y aumento de la conversión en un 30%.",
      imageUrl: "https://images.unsplash.com/photo-1707553513157-4dfd44e857e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwcmVkZXNpZ258ZW58MHx8fHwxNzE0NzUyMTExfDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      title: "Aplicación Móvil de Salud",
      description: "Creación de una interfaz intuitiva para una aplicación de seguimiento de salud personal.",
      imageUrl: "https://images.unsplash.com/photo-1491147334573-44cbb4602074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjBhcHAlMjB1aXxlbnwwfHx8fDE3MTQ3NTIxMTJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      title: "Plataforma Educativa Online",
      description: "Rediseño de la experiencia de aprendizaje para facilitar el acceso y la interactividad.",
      imageUrl: "https://images.unsplash.com/photo-1485217988980-11786ced9454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBlZHVjYXRpb24lMjBwbGF0Zm9ybXxlbnwwfHx8fDE3MTQ3NTIxMTN8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl">
            Portafolio de UX/UI
          </Heading>
          <Text mt={4} fontSize="lg">
            Explora algunos de mis proyectos más destacados en diseño de experiencia de usuario.
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {caseStudies.map((study, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={study.imageUrl} alt={study.title} borderRadius="md" />
              <Heading fontSize="xl" mt={4}>
                {study.title}
              </Heading>
              <Text mt={2}>{study.description}</Text>
              <Link href="#" isExternal color="teal.500" mt={2}>
                Ver más <FaExternalLinkAlt />
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
