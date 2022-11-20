import {
  useMantineTheme,
  Text,
  Grid,
  Card,
  Image,
  Badge,
  Button,
  Group,
} from "@mantine/core";

const ProjectCard = ({ project }: any) => {
  const theme = useMantineTheme();

  return (
    <Card shadow="sm" p="lg" style={{ height: "100%" }}>
      <Card.Section>
        <Image
          src={project?.image}
          alt={"sample1"}
          height="125px"
          fit="contain"
        />
      </Card.Section>

      <Group
        position="apart"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
      >
        <Text weight={500}>{project?.name}</Text>
        <Badge color="yellow" variant="light">
          {project?.languages}
        </Badge>
      </Group>

      <Text size="sm">{project?.description}</Text>
      <Button
        variant="light"
        onClick={() => redirectToLink(project?.webdomain)}
        color="yellow"
        fullWidth
        mt="14px"
      >
        Find out more
      </Button>
    </Card>
  );
};

export default ProjectCard;

const redirectToLink = (link: string): void => {
  window.open(link, "_blank");
};
