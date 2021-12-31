# Selfbot Voice

***Disclaimer: keban bukan urusan gw***

---

### Cara Menjalankan Nya

```bash
# 1. Rename file `.env.example` jadi `.env`

# 2. Masukin token akun lu di `TOKEN=tokenlu`

# 3. Kasih akun id di `OWNER=akunidlu`

############ INSTAL & RUN ############

$ npm install
$ npm start
```

# List Command

**Join Channel**
```bash
!join <server id> <halaman> <urutan channel>

## example:
!join 1234567991928 3 2

# Akun akan tetap berada di voice channel selama project masih aktif
```

**Channel**
```bash
!channel <server id> <halaman | default 1>

## example:
!channel 1234567991828 3

# Melihat daftar list voice channel
# - Lihat di bagian bawah embed untuk mengetahui maximal page / halaman
```

**Leave**
```bash
!leave

# Keluar dari voice channel
```

### Another command

**Join server with link**
```bash
!join-server <server-invite>

# Command ngetes aja - server invitenya langsung pake code
# - !join-server cgfWad
```

**Upload image to server - Must have permission**
```bash
!add [upload gambar atau link] [nama]

# Untuk menambahkan emoji dari gambar yang di upload atau link
```

*Made with ♥️ by Jeremy - Dont forget to star*
