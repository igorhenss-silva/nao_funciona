class VisitPersonService {

    save(person: string, visit: any) {
        if (person) {
            return http.post('visitPerson/post', new VisitPerson(person, visit));
        }
    }

    getAll() {
        return http.get('visitPerson/getAll');
    }

    delete(id: any) {
        return http.delete('visitPerson/' + id);
    }
    
}
