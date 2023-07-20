import express from 'express'
// import cors from 'cors'
import path from 'path'
const __dirname = path.resolve()

const router = express.Router()
    // app.use(cors())

router.get('/cricket/:year', (req, res) => {
    let cricketData = {
        1975: {
            year: '1975',
            tournament: 'ICC Cricket World Cup',
            format: 'ODI(60 Overs)',
            winner: 'West Indies',
            captain: 'Cleve Lloyds',
            runnerUP: 'Australia',
            host: 'England'
        },
        1979: {
            year: '1979',
            tournament: 'ICC Cricket World Cup',
            format: 'ODI(60 Overs)',
            winner: 'West Indies',
            captain: 'Cleve Lloyds',
            runnerUP: 'England',
            host: 'England'
        },
        1983: {
            year: '1983',
            tournament: 'ICC Cricket World Cup',
            format: 'ODI(60 Overs)',
            winner: 'India',
            captain: 'Kapil Dev',
            runnerUP: 'West Indies',
            host: 'England'
        },
        1987: {
            year: '1987',
            tournament: 'ICC Cricket World Cup',
            format: 'ODI(60 Overs)',
            winner: 'Australia',
            captain: 'Allan Border',
            runnerUP: 'England',
            host: 'Pakistan & India'
        },
        1992: {
            year: '1992',
            tournament: 'ICC Cricket World Cup',
            format: 'ODI(50 Overs)',
            winner: 'Pakistan',
            captain: 'Imran Khan',
            runnerUP: 'England',
            host: 'Australia'
        },
        1996: {
            year: '1996',
            tournament: 'ICC Cricket World Cup',
            format: 'ODI(50 Overs)',
            winner: 'SriLanka',
            captain: 'Arjuna Ranatunga',
            runnerUP: 'Australia',
            host: 'Pakistan, India & Srilanka'
        },
        1998: {
            year: '1998',
            tournament: 'ICC Champions Trophy',
            format: 'ODI(50 Overs)',
            winner: 'South Africa',
            captain: 'Hansie Cronje',
            runnerUP: 'West Indies',
            host: 'Bangladesh'
        },
        1999: {
            year: '1999',
            tournament: 'ICC Cricket World Cup',
            format: 'ODI(50 Overs)',
            winner: 'Australia',
            captain: 'Steve Waugh',
            runnerUP: 'Pakistan',
            host: 'England, Wales, Scotland & Ireland'
        },
        2000: {
            year: '2000',
            tournament: 'ICC Champions Trophy',
            format: 'ODI(50 Overs)',
            winner: 'New Zealand',
            captain: 'Stephen Fleming',
            runnerUP: 'India',
            host: 'Kenya'
        },
        2002: {
            year: '2002',
            tournament: 'ICC Champions Trophy',
            format: 'ODI(50 Overs)',
            winner: 'Srilanka & India (Shared)',
            captain: 'Sanath Jayasuriya & Sourav Ganguly',
            runnerUP: '-',
            host: 'Sri Lanka'
        },
        2003: {
            year: '2003',
            tournament: 'ICC Cricket World Cup',
            format: 'ODI(50 Overs)',
            winner: 'Australia',
            captain: 'Ricky Ponting',
            runnerUP: 'India',
            host: 'South Africa'
        },
        2004: {
            year: '2004',
            tournament: 'ICC Champions Trophy',
            format: 'ODI(50 Overs)',
            winner: 'West Indies',
            captain: 'Brian Lara',
            runnerUP: 'England',
            host: 'England'
        },
        2006: {
            year: '2006',
            tournament: 'ICC Champions Trophy',
            format: 'ODI(50 Overs)',
            winner: 'Australia',
            captain: 'Ricky Ponting',
            runnerUP: 'West Indies',
            host: 'India'
        },
        2007: {
            year: '2007',
            tournament: 'ICC Cricket World Cup, ICC T20 World Cup',
            format: 'ODI(50 Overs), T20(20 Overs)',
            winner: 'Australia, India',
            captain: 'Ricky Ponting, MS Dhoni',
            runnerUP: 'SriLanka, Pakistan',
            host: 'West Indies, South Africa'
        },
        2009: {
            year: '2009',
            tournament: 'ICC T20 World Cup, ICC Champions Trophy',
            format: 'T20(20 Overs), ODI(50 Overs)',
            winner: 'Pakistan, Australia',
            captain: 'Younis Khan, Ricky Ponting',
            runnerUP: 'SriLanka, South Africa',
            host: 'England, New Zealand'
        },
        2010: {
            year: '2010',
            tournament: 'ICC T20 World Cup',
            format: 'T20(20 Overs)',
            winner: 'England',
            captain: 'Paul Collingwood',
            runnerUP: 'Australia',
            host: 'West Indies'
        },
        2011: {
            year: '2011',
            tournament: 'ICC Cricket World Cup',
            format: 'ODI(50 Overs)',
            winner: 'India',
            captain: 'MS Dhoni',
            runnerUP: 'SriLanka',
            host: 'India, Bangladesh & SriLanka'
        },
        2012: {
            year: '2012',
            tournament: 'ICC T20 World Cup',
            format: 'T20(20 Overs)',
            winner: 'West Indies',
            captain: 'Darren Sammy',
            runnerUP: 'Sri Lanka',
            host: 'Sri Lanka'
        },
        2013: {
            year: '2013',
            tournament: 'ICC Champions Trophy',
            format: 'ODI(50 Overs)',
            winner: 'India',
            captain: 'MS Dhoni',
            runnerUP: 'England',
            host: 'England & Wales'
        },
        2014: {
            year: '2014',
            tournament: 'ICC T20 World Cup',
            format: 'T20(20 Overs)',
            winner: 'Sri Lanka',
            captain: 'Lasith Malinga',
            runnerUP: 'India',
            host: 'Bangladesh'
        },
        2015: {
            year: '2015',
            tournament: 'ICC Cricket World Cup',
            format: 'ODI(50 Overs)',
            winner: 'Australia',
            captain: 'Michael Clarke',
            runnerUP: 'New Zealand',
            host: 'Australia'
        },
        2016: {
            year: '2016',
            tournament: 'ICC T20 World Cup',
            format: 'T20(20 Overs)',
            winner: 'West Indies',
            captain: 'Darren Sammy',
            runnerUP: 'England',
            host: 'India'
        },
        2017: {
            year: '2017',
            tournament: 'ICC Champions Trophy',
            format: 'ODI(50 Overs)',
            winner: 'Pakistan',
            captain: 'Sarfaraz Ahmed',
            runnerUP: 'India',
            host: 'England & Wales'
        },
        2019: {
            year: '2019',
            tournament: 'ICC Cricket World Cup',
            format: 'ODI(50 Overs)',
            winner: 'England',
            captain: 'Eoin Morgan',
            runnerUP: 'New Zealand',
            host: 'England'
        },
        2021: {
            year: '2021',
            tournament: 'ICC T20 World Cup, ICC World Test Championship',
            format: 'T20(20 Overs), Test',
            winner: 'Australia, New Zealand',
            captain: 'Aaron Finch, Kane Williamson',
            runnerUP: 'New Zealand, India',
            host: 'U.A.E, England(Final)'
        },
        2022: {
            year: '2022',
            tournament: 'ICC T20 World Cup',
            format: 'T20(20 Overs)',
            winner: 'England',
            captain: 'Jos Buttler',
            runnerUP: 'Pakistan',
            host: 'Australia'
        },
        2023: {
            year: '2023',
            tournament: 'ICC Cricket World Cup, ICC World Test Championship',
            format: 'ODI(50 Overs), Test',
            winner: 'TBD, Australia',
            captain: 'TBD, Pat Cummins',
            runnerUP: 'TBD, India',
            host: 'India, England(Final)'
        }
    };
    let userInputYear = req.params.year;
    let cricketDataToSend = cricketData[userInputYear];

    if (cricketDataToSend) {
        res.send(cricketDataToSend);
    } else {
        res.status(404).send(`No ICC Tournament in ${req.params.year}`);
    }
});

router.use(express.static(path.join(__dirname, 'public')));

export default router