export default function SnackList() {
  const snacks = [
    { name: 'Potato Chips', rank: 5 },
    { name: 'Granola Bar', rank: 4 },
    { name: 'Nuts', rank: 3 },
    { name: 'Fruits', rank: 2 },
    { name: 'Chocolate', rank: 1 },
  ];
  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <div>
      <ol>
        {sortedSnacks.map((snack) => (
          <li key={snack.name}>{snack.name}</li>
        ))}
      </ol>
    </div>
  );
}
