import { AnimalModule, faker } from "@faker-js/faker";

// to ensure Dependency Inversion Principle
type TAnimalType = keyof AnimalModule;

interface IAnimal {
  type: TAnimalType;
  id: number;
  url: string;
  title: string;
  description: string;
  image: string;
}

export const fetchAnimal = async (animal: string) => {
  return new Promise<IAnimal[]>((resolve, reject) => {
    setTimeout(() => {
      try {
        const getImage = () =>
          faker.image.urlLoremFlickr({ category: "animals" });
        const getType = () => faker.animal.type();
        const getUrl = () => faker.internet.url();
        const getText = () => faker.lorem.sentences();
        const getTitle = (type: TAnimalType) => faker.animal[type]();

        const allAnimals = [...new Array(100)].map((_, index) => {
          const type = getType() as TAnimalType;
          return {
            type,
            id: index + 1,
            url: getUrl(),
            title: getTitle(type),
            description: getText(),
            image: getImage(),
          };
        });

        const animalData = animal ? filterAnimals(allAnimals, animal) : [];

        resolve(animalData);
      } catch (e) {
        reject(e);
      }
    }, 3000);
  });
};

function filterAnimals(allAnimals: IAnimal[], animal: string) {
  return allAnimals.filter(
    (item) =>
      item.type === animal ||
      /*
       ** important to say that the animal title is generated in execution time,
       ** so it's a matter of probability to filter by a specific title.
       */
      item.title.toLowerCase().includes(animal.toLowerCase()),
  );
}
