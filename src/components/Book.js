import React, { Component } from "react";
import PropTypes from "prop-types";
import { Badge } from 'reactstrap';
import { Card, Button, CardTitle, CardText, Modal, ModalBody, ModalFooter, ModalHeader, CardImg, CardBody, CardLink, CardSubtitle} from 'reactstrap';
import axios from 'axios';

class Book extends Component {
  // TODO: Buat state modal dengan nilai default false dan selectedBook dengan default {}
  state = {
    //isi disini
    modal: false,
    selectedBook: {}
  }

  toggle = (buku) => this.setState({ modal: !this.state.modal, selectedBook: buku });

  // TODO: Isi fungsi untuk memanggil method PUT untuk fitur merubah status peminjaman
  EditBook = buku => {
    // isi disini
    axios.put('https://library2020-api-agindo.herokuapp.com/library/'+buku._id)
      .then(res => {
        // ubah kembali state modal menjadi false
        this.setState({
          modal: false
        })
        
        // Tampilakan window alert yang memberitahu informasi bahwa perubahan berhasil
        // Isi disini
        // window.alert('Berhasil')
        window.location.reload();
      }
      );
  };

  DeleteBook = buku => {
    // isi disini
    axios.delete('https://library2020-api-agindo.herokuapp.com/library/'+buku._id)
      .then(res => {
        // ubah kembali state modal menjadi false
        this.setState({
          modal: false
        })
        
        // Tampilakan window alert yang memberitahu informasi bahwa perubahan berhasil
        // Isi disini
        // window.alert('Berhasil')
        window.location.reload();
      }
      );
  };

  
  onSubmit = e => {
    e.preventDefault();
    // TODO: Panggil fungsi EditBook 
    // isi disini
    this.EditBook(this.state.selectedBook);
    // this.DeleteBook(this.state.selectedBook);
  };

  onDelete = e => {
    e.preventDefault();
    this.DeleteBook(this.state.selectedBook);
  };

  render() {
    // TODO: Buat variabel judulBuku, pengarangBuku, genreBuku, dan isDipinjam yang nilainya didapat dari props `book`
    // isi disini
    const { judulBuku, pengarangBuku, genreBuku, isDipinjam } = this.props.book;

    return (
      <div>
      <Card style={{ cursor: 'pointer' }} onClick={() => { this.toggle(this.props.book) }}>
        {/* <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
        </CardBody>
        <img width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        <CardBody>
          <CardText>
            <p style={{fontSize: '12px', margin: 0}}>{genreBuku}</p>
            {judulBuku}
            <p style={{fontSize: '12px', margin: 0}}>Pengarang oleh {pengarangBuku}</p>
            <Badge color={isDipinjam ? "danger" : "success"}>
              { isDipinjam ? 'Lenyap' : "Tersedia" }
            </Badge>
          </CardText>
          {/* <CardLink href="#" style={{fontSize: '12px'}}>Update</CardLink>
          <CardLink href="#" style={{fontSize: '12px'}}>Hapus</CardLink>
          <CardLink href="#" style={{fontSize: '12px'}}>Another Link</CardLink> */}
        </CardBody>
      </Card>
      <Modal isOpen={this.state.modal} toggle={this.toggle} >
        <ModalHeader toggle={this.toggle}>{this.state.selectedBook.judulBuku}</ModalHeader>
        <ModalBody>
          Apakah Anda yakin untuk {isDipinjam ? "mengembalikan" : "meminjam"} buku ini?
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.onDelete}>Hapus</Button>
          <Button color="primary" onClick={this.onSubmit}>{isDipinjam ? "Kembalikan Buku" : "Pinjam Buku"}</Button>{' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
    );
  }
}

//PropTypes
Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book;
