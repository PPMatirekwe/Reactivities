import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import  { List, ListItem, ListItemText } from "@mui/material";
import Typography from '@mui/material/Typography';




function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
      .then(response => setActivities(response.data));
  }, []);

  return (
    <>
      <Typography variant='h3'>Reactivities</Typography>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText primary={activity.title} />
          </ListItem> 
        ))}
      </List>
    </>
  );
}

export default App;
