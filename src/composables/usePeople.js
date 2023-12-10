import { ref } from 'vue';
import { PeopleApiUrls } from '@/api/PeopleApiUrls';
import { getRandomNumberInRange } from '@/utils/getRandomNumberInRange';
import { RATING_MAX, RATING_MIN } from '@/constants/RatingRange';

const people = ref([]);
const getPeopleError = ref(null);
const isLoadingPeople = ref(false);

const getDefaultRating = () => getRandomNumberInRange(RATING_MIN, RATING_MAX);

export function usePeople() {

  const getPeopleList = () => {
    isLoadingPeople.value = true;

    fetch(PeopleApiUrls.getPeople)
      .then((res) => res.json())
      .then((json) => {
        const { results } = json;
        people.value = results.map((result, index) => ({
          ...result,
          id: index + 1,
          rating: getDefaultRating(),
        }));
      })
      .catch((err) => (getPeopleError.value = err))
      .finally(() => isLoadingPeople.value = false);
  };

  const getPersonById = (personId) => {
    return people.value.find(({id}) => id === personId);
  };

  const ratePerson = (personId, rating) => {
    const person = getPersonById(personId);
    person.rating = rating;
  };

  return {
    people,
    getPeopleError,
    isLoadingPeople,
    getPeopleList,
    getPersonById,
    ratePerson,
  };
}