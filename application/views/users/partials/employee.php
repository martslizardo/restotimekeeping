<?php
  $id = $this->user->info('id');
  $where = ['id'  => $id];
  $user = $this->Crud_model->fetch_tag_row('*','users',$where);
?>

<?php $shifts = $this->Crud_model->fetch('timekeeping_shift'); ?>
<?php $this->load->view('users/partials/employee_picture') ?>
<?php $this->load->view('users/partials/employee_edit_information') ?>
<?php $this->load->view('users/partials/employee_edit_other_information') ?>

<div class="row">
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
  <a data-toggle="modal" href="#employee-picture-modal"><img id="prof_pic" class="center-block bottom-margin img-fluid"></a>
  </div>

  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
    <h2>User Information</h2>
    <!-- <?= $this->user->info('lastname') ?>,
    <?= $this->user->info('firstname') ?><br>
    <?= $this->user->info('email') ?> -->
    <h5 id="d-name"></h5>
    <h5 id="d-email"></h5>
    <h5 id="d-shift"></h5>
    <button class="btn custom-button edit-button" data-toggle="modal" href="#employee-edit-information">Edit Info</button>
  </div>

  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
    <h2>Other Information</h2>
    <!-- <?= $this->user->info('lastname') ?>,
    <?= $this->user->info('firstname') ?><br>
    <?= $this->user->info('email') ?> -->
    <h5>SSS: <span id="d-sss"></span> </h5>
    <h5>Phil Health: <span id="d-phil-health"></span></h5>
    <h5>Tin: <span id="d-tin"></span></h5>
    <h5>Start Date: <span id="d-date-start"></span></h5>
    <button class="btn custom-button edit-button" data-toggle="modal" href="#employee-edit-other-information">Edit Other Info</button>
  </div>

</div>

<!-- <div class="row">
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
    <div class="card">
      <div class="card-block text-center">
        <h2>Edit Profile Picture</h2>
        <a data-toggle="modal" href="#employee-picture-modal"><img height="200" id="prof_pic"></a>
        <a class="btn btn-info waves-effect" href="<?= base_url().'employee/request_shift/'.$this->session->id?>">Shift</a>
      </div>
    </div>
  </div>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
    <div class="card">
      <div class="card-block text-center">
        <h2>Edit Information</h2>
        <hr>
        <form id="employee-info-form" method="post">
          <div class="form-group">
            <label>First Name</label>
            <input type="hidden" name="id" value="<?= $this->uri->segment(3) ?>">
            <input type="text" name="fname" value="<?= $this->user->info('firstname') ?>" class="form-control">
            <input type="text" name="fname" id="firstname" class="form-control">
            <div class="text-danger" id="fname_err"></div>
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <input type="text" name="lname" value="<?= $this->user->info('lastname') ?>" class="form-control">
            <input type="text" name="lname" id="lastname" class="form-control">
            <div class="text-danger" id="lname_err"></div>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="text" name="email" value="<?= $this->user->info('email') ?>" class="form-control">
            <input type="text" name="email" id="email" class="form-control">
            <div class="text-danger" id="email_err"></div>
          </div>
          <div class="form-group">
            <label>Shift</label>
            <input type="text" name="shift" value="<?= $shift->shift_type ?>" class="form-control">
            <select class="form-control" name="shift" id="shift">
            <?php foreach($shifts as $row): ?>
              <option value="<?= $row->id ?>"<?php if($shift->id==$row->id) echo 'selected="selected"' ?> ><?= $row->shift_type ?></option>
            <?php endforeach ?>
            </select>
          </div>
          <div class="form-group">
          <hr>
            <button type="Submit" class="btn btn-info"><i class="fa fa-save m-r-10"></i>Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4">
    <div class="card">
      <div class="card-block text-center">
        <div id="success-message"></div>
          <h2>Other Information</h2>
          <hr>
          <form id="employee-other-info-form" method="post">
            <div class="form-group">
              <label>SSS</label>
              <input type="hidden" name="id" value="<?= $this->uri->segment(3) ?>">
              <input type="text" name="sss" id="sss" class="form-control">
              <div class="text-danger" id="sss_err"></div>
            </div>
            <div class="form-group">
              <label>Phil Health</label>
              <input type="text" name="philhealth" id="phil-health" class="form-control">
              <div class="text-danger" id="philhealth_err"></div>
            </div>
            <div class="form-group">
              <label>Tin</label>
              <input type="text" name="tin" id="tin" class="form-control">
              <div class="text-danger" id="tin_err"></div>
            </div>
            <div class="form-group">
              <label>Date Started</label>
              <input type="text" name="date_start" id="start-date" class="form-control">
              <div class="text-danger" id="date_start_err"></div>
            </div>
            <div class="form-group">
            <hr>
              <button type="Submit" class="btn btn-info"><i class="fa fa-save m-r-10"></i>Submit</button>
            </div>
          </form>
          <button class="btn custom-button edit-button" data-toggle="modal" href="#edit-other-information-modal">Edit Info</button>
      </div>
    </div>
  </div>
</div> -->

