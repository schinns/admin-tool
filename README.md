## 청남 애드민 툴

### MVP

* [ ] Auth with JWT
* [ ] Create new boi
* [ ] Create new leader
* [ ] Create new activity
* [ ] Send email when activity has taken place
* [ ] Send email to participants for feedback
* [ ] Send email to leaders report

#### ym table

   id  |  name   |  group  |   email    |   phone   |  birthday |  prefer_email  |  
  ---  |   ---   |   ---   |    ---     |    ---    |    ---    |      ---       |   
  int  | varchar |   int   |   varchar  |  varchar  |    date   |      bool      |   


#### leader table

id   |  name   |  calling  |   email    |  phone
---  |   ---   |    ---    |    ---     |   ---
int  | varchar |    int    |  varchar   |  varchar


#### activities table

id   |  description   |     date     |  taken_place  
---  |      ---       |     ---      |      ---
int  |    varchar     |   timestamp  |      bool

#### participants table

id   |     ym_id      |  activities_id        
---  |      ---       |       ---      
int  |      int       |       int  

#### feedbacks table

id   |     ym_id      |  activities_id    |   feedback     
---  |      ---       |       ---         |     ---
int  |      int       |       int         |    text
