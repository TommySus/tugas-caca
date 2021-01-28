const { Mail, User } = require('../models')

class MailController {
    static createMail (req, res, next) {
        const obj = {
            kepada: req.body.kepada,
            perihal: req.body.perihal,
            keterangan: req.body.keterangan,
            instansi: req.body.instansi,
            jenisSurat: req.body.jenisSurat,
            UserId: req.loggedInUser.id
        }
        Mail.create(obj)
        .then(data => {
            let month = data.createdAt.toISOString().slice(5,7)
            let day =  data.createdAt.toISOString().slice(8,10)
            let year = data.createdAt.toISOString().slice(0,4)
            res.status(201).json({
                nomorSurat: `${data.jenisSurat}/${data.id}/${data.instansi}/PKP/${day}.${month}/${year}`
            })
        })
        .catch(error => {
            next(error)
        })
    }

    static findMail (req, res, next) {
        Mail.findOne({where: {id: req.params.id}, include: User})
        .then(data => {
            res.status(200).json({
                id: data.id,
                kepada: data.kepada,
                perihal: data.perihal,
                instansi: data.instansi,
                jenisSurat: data.jenisSurat,
                namaPenanggungJawab: data.User.name,
                emailPenanggungJawab: data.User.mail,
                tanggalDiBuat: data.createdAt.toISOString().slice(0,10)
            })
        })
        .catch(error => {
            next(error)
        })
    }
}

module.exports = MailController