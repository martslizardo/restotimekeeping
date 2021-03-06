<!-- Modal -->
<div class="modal fade" id="u-d-modal" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" >
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="user-deactivated-form" method="post">
          <h5 id="deactivate-confirm-message"></h5>
          <input type="hidden" id="u-d-id" name="id" />
          <input type="hidden" id="u-d-name" name="name" />
      </div>
      <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
          <button type="submit" class="btn custom-button">Yes</button>
        </form>      
      </div>
    </div>
  </div>
</div>