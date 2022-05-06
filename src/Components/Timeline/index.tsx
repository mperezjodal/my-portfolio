import { Timeline, Text } from '@mantine/core';
import './styles.css';
import '../../App.css';

function TimelineComponent() {
  return (
    <div className="TimelineContainer">
      <p className="Title">
        Experience
      </p>
      <Timeline active={4} bulletSize={24} lineWidth={2}>
        <Timeline.Item title="Mathematical Olympiad Lecturer">
          <Text color="dimmed" size="md">Lectured Mathematical Olimpiad Seminaries in <a href="https://fi.ort.edu.uy/78235/33" target="_blank"><Text variant="link" size="md" component="span">Universidad ORT</Text></a> and Universidad de Montevideo.</Text>
          <Text color="dimmed" size="md">Also weekly workshops in PREU High School.</Text>
          <Text size="sm" mt={4}>2019 - 2020</Text>
        </Timeline.Item>

        <Timeline.Item title="Problem Selection Committee">
          <Text color="dimmed" size="md">Volunteering in problem formulation and selection, and jury for the Uruguayan National Mathematical Olympiads.</Text>
          <Text color="dimmed" size="md">Also participated as jury in the international Olimpíada Matemática Rioplatense alongside world-class Professors in Mathematics.</Text>
          <Text size="sm" mt={4}>2019 - Present</Text>
        </Timeline.Item>

        <Timeline.Item title="Adjunct Proffesor">
          <Text color="dimmed" size="md">Adjunct proffesor in the course of Discrete Mathematics in Universidad ORT Uruguay.</Text>
          <Text size="sm" mt={4}>2020</Text>
        </Timeline.Item>

        <Timeline.Item title="Software Engineer">
          <Text color="dimmed" size="md">Started as a Junior Software Engineer Intern and then worked as a Software Engineer I in <a href="https://tangocode.com" target="_blank"><Text variant="link" size="md" component="span">TangoCode Inc.</Text></a></Text>
          <Text color="dimmed" size="md">I worked in agile software projects and web development related to Digital Marketing in the product <a href="https://getchassis.com" target="_blank"><Text variant="link" size="md" component="span">Chassis</Text></a>.</Text>
          <Text size="sm" mt={4}>2020 - 2022</Text>
        </Timeline.Item>

        
      </Timeline>
    </div>
  );
}

export default TimelineComponent;