import React, { useState, useEffect } from 'react';

export default function App() {
  // Estado inicial de hábitos simulando el "Rewire"
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem('rewire_habits');
    return saved ? JSON.parse(saved) : [
      { id: 1, name: 'Meditación Matutina', streak: 5, completed: false },
      { id: 2, name: 'Lectura de Neurociencia', streak: 3, completed: true },
      { id: 3, name: 'Ejercicio de Fuerza', streak: 0, completed: false },
    ];
  });

  const [newHabitName, setNewHabitName] = useState('');

  // Persistencia en LocalStorage
  useEffect(() => {
    localStorage.setItem('rewire_habits', JSON.stringify(habits));
  }, [habits]);

  // Alternar estado completado del hábito del día
  const toggleHabit = (id) => {
    setHabits(habits.map(habit => {
      if (habit.id === id) {
        const isCompleted = !habit.completed;
        return {
          ...habit,
          completed: isCompleted,
          streak: isCompleted ? habit.streak + 1 : Math.max(0, habit.streak - 1)
        };
      }
      return habit;
    }));
  };

  // Agregar un nuevo hábito
  const addHabit = (e) => {
    e.preventDefault();
    if (!newHabitName.trim()) return;
    
    const newHabit = {
      id: Date.now(),
      name: newHabitName,
      streak: 0,
      completed: false
    };

    setHabits([...habits, newHabit]);
    setNewHabitName('');
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <span style={styles.pulseIcon}>⚡</span>
          <h1 style={styles.title}>Rewire <span style={styles.highlight}>Pulse</span></h1>
        </div>
        <p style={styles.subtitle}>Sincroniza tus hábitos, recablea tu mente.</p>
      </header>

      {/* Formulario para nuevo hábito */}
      <form onSubmit={addHabit} style={styles.form}>
        <input 
          type="text" 
          placeholder="Nuevo hábito neuronal (ej. Programar 1hr)..." 
          value={newHabitName}
          onChange={(e) => setNewHabitName(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Conectar</button>
      </form>

      {/* Lista de Hábitos */}
      <main style={styles.habitList}>
        {habits.map(habit => (
          <div 
            key={habit.id} 
            style={{
              ...styles.card, 
              borderColor: habit.completed ? 'var(--success-neon)' : 'var(--border-neon)'
            }}
          >
            <div>
              <h3 style={styles.habitTitle}>{habit.name}</h3>
              <span style={styles.streakText}>🔥 Racha: {habit.streak} días</span>
            </div>
            <button 
              onClick={() => toggleHabit(habit.id)}
              style={{
                ...styles.checkButton,
                backgroundColor: habit.completed ? 'var(--success-neon)' : 'transparent',
                color: habit.completed ? '#fff' : 'var(--primary-glow)'
              }}
            >
              {habit.completed ? '✓ Sincronizado' : 'Activar'}
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}

// Estilos en línea rápidos basados en las variables CSS del tema
const styles = {
  container: {
    backgroundColor: 'var(--bg-dark)',
    color: 'var(--text-main)',
    minHeight: '100vh',
    padding: '2rem',
    fontFamily: "'Inter', sans-serif",
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  logoContainer: {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
  pulseIcon: {
    fontSize: '2rem',
    color: 'var(--primary-glow)',
    textShadow: '0 0 10px var(--primary-glow)',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '800',
    letterSpacing: '1px',
    margin: 0,
  },
  highlight: {
    color: 'var(--primary-glow)',
    textShadow: '0 0 15px rgba(0, 210, 255, 0.5)',
  },
  subtitle: {
    color: 'var(--text-muted)',
    marginTop: '0.5rem',
  },
  form: {
    display: 'flex',
    gap: '10px',
    maxWidth: '500px',
    margin: '0 auto 2rem auto',
  },
  input: {
    flex: 1,
    backgroundColor: 'var(--card-bg)',
    border: '1px solid var(--border-neon)',
    borderRadius: '8px',
    padding: '12px 16px',
    color: 'var(--text-main)',
    outline: 'none',
  },
  button: {
    backgroundColor: 'var(--primary-glow)',
    color: '#000',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    padding: '0 20px',
    cursor: 'pointer',
    boxShadow: '0 0 10px rgba(0, 210, 255, 0.4)',
    transition: 'all 0.3s ease',
  },
  habitList: {
    maxWidth: '500px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  card: {
    backgroundColor: 'var(--card-bg)',
    border: '1px solid',
    borderRadius: '12px',
    padding: '16px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
    transition: 'all 0.3s ease',
  },
  habitTitle: {
    margin: '0 0 5px 0',
    fontSize: '1.1rem',
  },
  streakText: {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
  },
  checkButton: {
    border: '1px solid var(--primary-glow)',
    borderRadius: '6px',
    padding: '8px 12px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.9rem',
    transition: 'all 0.2s ease',
  }
};