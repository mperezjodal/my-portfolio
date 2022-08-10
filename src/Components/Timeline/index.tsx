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

        {/* <Timeline.Item title="R&D - Digital Sense">
          <Text color="dimmed" size="md"><a href="https://www.digitalsense.ai" target="_blank"><Text variant="link" size="md" component="span">Digital Sense</Text></a> is a leading Computer Vision and Machine Learning R&D studio.</Text>
          <Text size="sm" mt={4}>2022 - Present</Text>
        </Timeline.Item> */}

        <Timeline.Item title="Software Engineer I - TangoCode">
          <Text color="dimmed" size="md">Started as a Junior Software Engineer Intern and raised to Software Engineer I in <a href="https://tangocode.com" target="_blank"><Text variant="link" size="md" component="span">TangoCode</Text></a>.</Text>
          <Text color="dimmed" size="md">I worked in agile software projects and web development related to Digital Marketing in the product <a href="https://getchassis.com" target="_blank"><Text variant="link" size="md" component="span">Chassis</Text></a>.</Text>
          <Text size="sm" mt={4}>2020 - 2022</Text>
        </Timeline.Item>

        <Timeline.Item title="Problem Selection Committee - Com-Partida de Matemática del Uruguay">
          <Text color="dimmed" size="md">Volunteering in problem formulation and selection, and jury for the Uruguayan National Mathematical Olympiads. Organization of competitions.</Text>
          <Text color="dimmed" size="md">Participated as International Jury in the River Plate Mathematical Olympiad alongside world-class Professors in Mathematics, Argentina 2019.</Text>
          <Text size="sm" mt={4}>2019 - Present</Text>
        </Timeline.Item>

        <Timeline.Item title="Adjunct Professor - ORT University">
          <Text color="dimmed" size="md">Adjunct proffesor in the course of Discrete Mathematics in Universidad ORT Uruguay.</Text>
          <Text size="sm" mt={4}>2020</Text>
        </Timeline.Item>

        <Timeline.Item title="Mathematical Olympiad Lecturer">
          <Text color="dimmed" size="md">Planned and lectured Mathematical Olimpiad Seminaries in <a href="https://fi.ort.edu.uy/78235/33" target="_blank"><Text variant="link" size="md" component="span">Universidad ORT</Text></a>, Universidad de Montevideo, Universidad de la República and many public and private Schools, including weekly workshops in PREU High School for the whole year of 2019.</Text>
          <Text size="sm" mt={4}>2019 - 2020</Text>
        </Timeline.Item>

      </Timeline>
    </div>
  );
}

export default TimelineComponent;