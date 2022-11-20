import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

const CardLayout = () => {
  return (
    <Card shadow="sm" p="xs" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://img.freepik.com/free-vector/text-files-concept-illustration_114360-4402.jpg?w=1380&t=st=1668846237~exp=1668846837~hmac=1c5cce581a5e9d3fde9fdb32e65c48452aeb0813cf59043018650e85b95323b3"
          height={150}
          fit="scale-down"
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Norway Fjord Adventures</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
};
export default CardLayout;
