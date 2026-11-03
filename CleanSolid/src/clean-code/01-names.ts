(() => {

  // Archivos a evaluar
  const filesToEvaluate = [
    { id: 1, flagged: false },
    { id: 2, flagged: false },
    { id: 3, flagged: true },
    { id: 4, flagged: false },
    { id: 5, flagged: false },
    { id: 7, flagged: true },
  ];

  // Archivos marcados para borrar
  const filesToDelete = filesToEvaluate.filter((file) => file.flagged);

  // Nombres de clases e interfaces: sin prefijos ni sufijos innecesarios
  class User {}
  interface User {}

  // TODO: Tarea

  const today = new Date();
  const elapsedDays = 23;
  const filesInDirectory = 33;
  const firstName = 'Fernando';
  const lastName = 'Herrera';
  const daysSinceLastModification = 12;
  const maxClassesPerStudent = 6;

})();