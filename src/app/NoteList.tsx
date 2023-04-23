import prisma from "@/lib/prisma";

export const NoteList = async () => {
  const notes = await prisma.note.findMany();

  return (
    <ul>
      {notes.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};
