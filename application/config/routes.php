<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/

//users controller
$route['default_controller'] = 'dashboard';
$route['add/user'] = 'users/add_user';
$route['get/users'] = 'users/get_users';
$route['activate/user'] = 'users/activate';
$route['deactivate/user'] = 'users/deactivate';

//position controller
$route['get/position']  = 'position/get_position';
$route['add/position']  = 'position/add_position';
$route['edit/position']  = 'position/edit_position';

//login
$route['auth/login']    = 'login/auth';


//Attendance
$route['add/attendance'] = 'attendance/add_timesheet';
$route['get/attendance'] = 'attendance/get_timesheet';
$route['timesheet'] ='attendance/index';
$route['leaves'] = 'attendance/leaves';
$route['leave/employee'] ='attendance/leave_request';
$route['eleave']='leaves/index';

$route['get/leave/request']['GET']='leaves/fetch_leave_request';
$route['get/leave/request/(:any)']['GET']='leaves/fetch_leave_request/$1';
$route['get/leave']['GET'] = 'leaves/fetch_leave';
$route['leaves/add']['POST']='leaves/insert_leave';
$route['leaves/edit/(:any)']['POST']='leaves/update_leave/$1';
$route['leaves/file']['POST']='leaves/leave_request';
$route['get/leaveInfo']['GET']='leaves/get_leave';
//Shift
$route['shift'] = 'shift/index';
$route['shift/front'] = 'shift/front_house';
$route['shift/back']='shift/back_house';
$route['eschedule'] = 'shift/eschedule';
// $route['calendar'] = 'attendance/calendar';
$route['get/emp_attendance'] = 'attendance/get_employee_attendance';

//Overtime
$route['overtime'] = 'attendance/overtime';
$route['add/overtime'] = 'attendance/add_overtime';
$route['get/admin_overtime'] = 'attendance/get_admin_overtime';
$route['get/emp_overtime'] = 'attendance/get_employee_overtime';
$route['leave/reset']='leaves/approved_reset';
$route['leave/approve/(:any)']['POST']='leaves/approve_leave/$1';
$route['leave/reject/(:any)']['POST']='leaves/reject_leave/$2';
//email confirmation
$route['auth/account/verification/(:any)/(:any)'] = 'email/verifykey/$1/$2';
$route['auth/reset/verification/(:any)/(:any)'] = 'email/resetkey/$1/$2';
//$route['calendar']
//$route['calendar']

$route['404'] = 'errors/error_404';

$route['404_override'] = 'errors/error_404';
$route['translate_uri_dashes'] = FALSE;
