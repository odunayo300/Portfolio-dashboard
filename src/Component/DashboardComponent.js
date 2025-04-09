import React from 'react';
import { Charts } from 'chart.js/auto';
import { Doughnut, Line } from 'react-chartjs-2';
import './DashboardComponent.css';
import { Button,For, Stack, Table,Avatar,Progress,HStack} from '@chakra-ui/react';
import { IoIosAdd } from "react-icons/io";

const items = [
  { id: 1, name: "Steven Terry", Project: "Landing page", price:"$700" , Delivered: "2024-01-15", progress: 80 },
  { id: 2, name: "Audrey Jones", Project: "E-commerce", price: "$5000", Delivered: "2024-02-20", progress: 60 },
  { id: 3, name: "Brian Fisher", Project: "Translator", price: "$2000", Delivered: "2024-03-10", progress: 90 },
  { id: 4, name: "Molly Milles", Project: "Dating website", price: "$5000", Delivered: "2024-04-05", progress: 70 },
  { id: 5, name: "Stephanie coker", Project: "Booking site", price: "$3000", Delivered: "2024-05-15", progress: 50 },
]

const projectReportData = [
  {
    label: "completed project",
    value: 60,
  },
  {
    label: "pending project",
    value: 30,
  },
  {
    label: "refunded project",
    value: 10,
  },
];

const earningSummaryData = [
  { label: "January", value: 200001 },
  { label: "February", value: 2000 },
  { label: "March", value: 7000 },
  { label: "April", value: 4500 },
  { label: "May", value: 57000 },
  { label: "June", value: 6000 },
  { label: "July", value: 7000 },
  { label: "August", value: 15000 },
  { label: "September", value: 9000 },
  { label: "October", value: 8000 },
  { label: "November", value: 11000 },
  { label: "December", value: 6000 },
];

export default function DashboardComponent() {
  return (
    <div>
      <h1>My Dashboard</h1>
      <p>Welcome to my dashboard!</p>
      <div className="dashboard-container">
        {/* Doughnut Chart */}
        <div className="doughnut-container">
          <Doughnut
            data={{
              labels: projectReportData.map((data) => data.label),
              datasets: [
                {
                  label: 'Project Report',
                  data: projectReportData.map((data) => data.value),
                  backgroundColor: [
                    'rgba(75, 192, 192, 1)', // Vibrant teal
                    'rgba(255, 99, 132, 1)', // Vibrant red
                    'rgba(255, 206, 86, 1)', // Vibrant yellow
                  ],
                  borderColor: [
                    'rgba(75, 192, 192, 0.8)', // Border teal
                    'rgba(255, 99, 132, 0.8)', // Border red
                    'rgba(255, 206, 86, 0.8)', // Border yellow
                  ],
                  borderWidth: 2, // Thickness of the border
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: 'Project Report',
                  display: true,
                },
              },
            }}
          />
        </div>

        {/* Earning Report */}
        <div className="earning-container">
          <h2>Earning Report</h2>
          <p>Total Income in 2024: <strong>$150,000</strong></p>
          <Line
            data={{
              labels: earningSummaryData.map((data) => data.label),
              datasets: [
                {
                  label: 'Earnings',
                  data: earningSummaryData.map((data) => data.value),
                  borderColor: 'rgba(75, 192, 192, 1)', // Line color
                  backgroundColor: 'rgba(75, 192, 192, 0.2)', // Fill under the line
                  borderWidth: 2,
                  tension: 0.4, // Smooth curve
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: 'Monthly Earnings',
                  display: true,
                },
                legend: {
                  display: false, // Hide legend for simplicity
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Months',
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: 'Earnings ($)',
                  },
                },
              },
            }}
          />
        </div>
      </div>
      <div className='project-heading'>
        <p>Active projects</p>
        <Button size="md" colorPalette={"purple"}><IoIosAdd />Add new project</Button>
      </div>
      
      <Stack gap="10">
        <For each={[ "outline"]}>
          {(variant) => (
            <Table.Root key={variant} size="sm" variant={variant}>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader>Client Name</Table.ColumnHeader>
                  <Table.ColumnHeader>Project</Table.ColumnHeader>
                  <Table.ColumnHeader>Price</Table.ColumnHeader>
                  <Table.ColumnHeader>Delivered in</Table.ColumnHeader>
                  <Table.ColumnHeader>Progress</Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {items.map((item) => (
                  <Table.Row key={item.id}>
                    <Table.Cell>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Avatar.Root>
                          <Avatar.Fallback name={item.name}/>
                          <Avatar.Image src={`https://randomuser.me/api/portraits/men/${item.id}.jpg`}/>  
                        </Avatar.Root>
                        {item.name}
                      </div>
                    </Table.Cell>
                    <Table.Cell>{item.Project}</Table.Cell>
                    <Table.Cell >{item.price}</Table.Cell>
                    <Table.Cell >{item.Delivered}</Table.Cell>
                    <Table.Cell >
                     <Progress.Root defaultValue={item.progress} maxW="sm" colorPalette={"green"}>
                      <HStack gap="5">
                        <Progress.Track flex="1">
                          <Progress.Range />
                        </Progress.Track>
                        <Progress.ValueText>{item.progress}</Progress.ValueText>
                      </HStack>
                     </Progress.Root>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          )}
        </For>
     </Stack>

    </div>
  );
}
                