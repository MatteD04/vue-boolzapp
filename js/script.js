const { createApp } = Vue;

createApp({
    data() {
        return {
          activeItem: 0,
            contacts: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                  }
                ],
              },
              {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                  },
                  {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                  },
                  {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                  }
                ],
              },
              {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                  },
                  {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                  },
                  {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                  }
                ],
              },
              {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                  },
                ],
              },
            ],
            nameActive: 0,
            newMex:'',
            search:'',
        };
    },
    methods: {
      selectName(index){
        this.nameActive = index;
      },

      //aggiunge un uovo messaggio
      addNewMex(){
        let newMessage = {
          date: '10/01/2020 16:00',
          message: this.newMex,
          status: 'sent'
        };
        this.contacts[this.nameActive].messages.push(newMessage);
        this.newMex = '';

        //setTimeout per la risposta
        setTimeout(() => {
          const reply = {
            date: '10/01/2020 16:00',
            message: 'ciao a te',
            status: 'received'
          }
          this.contacts[this.nameActive].messages.push(reply);

        }, 1000)
      },
      
      //funzione per cercare i contatti
      searchName(){
        //variabile per salvare i dati in input
        const userSearch = this.search.toLowerCase();
        this.contacts.forEach((user, i) => {
            if(user.name.toLowerCase().includes(userSearch)){
              
            }else {
            }
        });

      }
    }
}).mount('#app');
