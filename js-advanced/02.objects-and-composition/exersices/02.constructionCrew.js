function constructionCrew(worker) {
    if (worker.dizziness) {
      worker.levelOfHydrated += worker.experience * worker.weight * 0.1;
      worker.dizziness = false;
    }
    return worker;
  }
  
  console.log({ weight: 95, experience: 3, levelOfHydrated: 0 });
  