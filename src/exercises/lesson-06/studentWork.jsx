import { useState } from 'react';

import UserProfile from '../../components/lesson-06/UserProfile';
import TaskFilter from '../../components/lesson-06/TaskFilter';
import TaskItem from '../../components/lesson-06/TaskItem';

import filterTasks from '../../utils/filterTasks';
import useTasks from '../../hooks/useTasks';

export default function StudentWork() {
  const { tasks, loading } = useTasks();
  const [filter, setFilter] = useState('all');

  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile name="Student" />

      <TaskFilter filter={filter} onFilterChange={setFilter} />

      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
