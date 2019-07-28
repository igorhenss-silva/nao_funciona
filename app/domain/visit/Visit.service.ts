import { http } from '';

class VisitService {

    save(visit: Visit) {
        if(!visit.getGuest) {
            alert('Every visit needs a Guest.');
            throw new Error('Every visit needs a guest.');
        }
        if(!visit.getWelcomeText) {
            alert('Every visit needs to have a W3lcome Text.');
            throw new Error('Every visit needs to have a w3lcome text.');
        }
        if(!visit.getDate) {
            alert('Every visit needs a Date to come over.');
            throw new Error('Every visit needs a Date ot come over.');
        }
        if(!visit.getId) {
            return http.post('visit/post', visit);
        }
        return http.put('visit/' + visit.getId, visit);
    };

    getAll() {
        return http.get('visit/getAll');
    };

    find(id: any) {
        return http.get('visit/getOne/' + id);
    };

    delete(visit: Visit) {
        return http.delete('visit/' + visit.getId);
    };
    
}
