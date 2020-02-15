import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class AddBook extends Component {

  state = {
    judul: "",
    pengarang: "",
    genre: ""
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state)
    const payload = {
      judulBuku: this.state.judul,
      pengarangBuku: this.state.pengarang,
      genreBuku: this.state.genre,
      isDipinjam: false
    }
    this.AddBook(payload);
  };

  onChange = (e, val) => {
    this.setState({
      [val]: e.target.value
    });
  }
  // TODO: Isi fungsi untuk memanggil method POST untuk fitur menambah buku baru
  AddBook = buku => {
    // isi disini
    axios.post("https://library2020-api-agindo.herokuapp.com/library", { judulBuku: buku.judulBuku, pengarangBuku: buku.pengarangBuku, genreBuku: buku.genreBuku, isDipinjam: false })
      .then(res => {
        window.alert("Berhasil!");
        this.setState({
          judul: "",
          pengarang: "",
          genre: ""
        });
        console.log(res)
      }
      );
  };

  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="judulBuku" sm={2}>Judul Buku</Label>
          <Col sm={10}>
            <Input onChange={(e) => this.onChange(e, 'judul')} type="judul" name="judul" id="judul" placeholder="isi dengan judul buku" value={this.state.judul} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="pengarangBuku" sm={2}>Pengarang Buku</Label>
          <Col sm={10}>
            <Input onChange={(e) => this.onChange(e, 'pengarang')} type="pengarang" name="pengarang" id="pengarang" placeholder="isi dengan nama pengarang" value={this.state.pengarang} />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="genreBuku" sm={2}>Genre Buku</Label>
          <Col sm={10}>
            <Input onChange={(e) => this.onChange(e, 'genre')} type="genre" name="genre" id="genre" placeholder="isi dengan genre buku" value={this.state.genre} />
          </Col>
        </FormGroup>
        <div style={{ textAlign: "right" }}>
          <Button onClick={this.onSubmit}>Submit</Button>
        </div>
      </Form>
    );
  }
}


export default AddBook;