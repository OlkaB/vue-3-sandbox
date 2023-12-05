import { ref } from 'vue';
import { PeopleApiUrls } from '@/api/PeopleApiUrls';

const people = ref([]);
const getPeopleError = ref(null);
const isLoadingPeople = ref(false);

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
        }));
      })
      .catch((err) => (getPeopleError.value = err))
      .finally(() => isLoadingPeople.value = false);
  };

  const getPersonById = (personId) => {
    return people.value.find(({id}) => id === personId);
  };

  return {
    people,
    getPeopleError,
    isLoadingPeople,
    getPeopleList,
    getPersonById,
  };
}