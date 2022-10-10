@extends('layouts.invoice')

@section('title', 'Invoice')

@section('header')
    @include('inc.header')
@endsection

@section('sidebar')
    @include('inc.sidebar')
@endsection

@section('scripts')
    <script src="{{url('app/moneyin/invoice/invoice.module.js')}}"></script>
    <script src="{{url('app/moneyin/invoice/invoice.useCredit.js')}}"></script>
    <script src="{{url('app/moneyin/invoice/invoice.excessPayment.js')}}"></script>
@endsection

@section('styles')
    <style>
        
        .uk-table td, .uk-table th {
            padding: 6px 6px;
        }
        
        #table_center th,td,tr{
            border-bottom-color: black !important;
            border: 1px solid black !important;
            padding: 3px 3px;
        }
        
        .no-border{
            border:0px !important;
        }
        
        table#info{
            font-size: 12px !important;
            line-height: 2px;
            border: none !important;
            min-width: 200px;
            width: 200px;
            float:right;
        }
        table#info tr td{
             border: none !important;
        }
        table#info tr{
            padding: 0px;
            border: none !important;
        }
        
        @media print {
            body {
              /*margin-top: 130px;*/
              margin-top: -100px;
            }

            #print{
                display: none;
            }
            
            /*.print_header{*/
            /*    position: fixed;*/
            /*    top: 0px;*/
            /*    left: 0px;*/
            /*}*/
            
        }
    </style>
@endsection

@section('content')

    <div class="uk-width-medium-10-10 uk-container-center reset-print">
        <div class="uk-grid uk-grid-collapse" data-uk-grid-margin>
            <div class="uk-width-large-2-10 hidden-print uk-visible-large">
                <div class="md-list-outside-wrapper">
                    <ul class="md-list md-list-outside">

                        <li class="heading_list">Recent Invoices</li>

                        @foreach($invoices as $invoice_data)
                        <li>
                            <a href="{{ url('/invoice/show'.'/'.$invoice_data->id) }}" class="md-list-content">
                                <span class="md-list-heading uk-text-truncate">{{ $invoice_data->customer->display_name }} <span class="uk-text-small uk-text-muted">({{ $invoice_data->created_at->format('d M Y') }})</span></span>
                                <span class="uk-text-small uk-text-muted">INV-{{ str_pad($invoice_data->invoice_number, 6, '0', STR_PAD_LEFT) }}</span>
                            </a>
                        </li>
                        @endforeach

                        <li class="uk-text-center">
                            <a class="md-btn md-btn-primary md-btn-mini md-btn-wave-light waves-effect waves-button waves-light uk-margin-top" href="{{ url('/invoice') }}">See All</a>
                        </li>

                    </ul>
                </div>
            </div>

            <?php $helper = new \App\Lib\Helpers; ?>
            
            @inject('theader', '\App\Lib\TemplateHeader')
            <div class="uk-width-large-8-10">
                <div class="md-card md-card-single main-print">
                    <div id="invoice_preview">
                        <div class="md-card-toolbar" style="border-bottom: 0px solid rgba(0,0,0,.12);">
                             <div  style="float: left;margin-right: 15px; height: 14px;" class="uk-form-file md-btn md-btn-wave-light">
                                  <a href="{{route('invoice_create')}}">Invoice Create</a>
                                </div>
                            <div class="md-card-toolbar-actions hidden-print">

                                <span  style="display: none;" id="loaded_n_total"></span>
                                <span  id="status"></span>   <progress id="progressBar" value="0" max="100" style="float: left;margin-right: 15px; margin-top: 10px; height: 20px;width:300px; display: none;"></progress>
                                <div  style="float: left;margin-right: 15px; height: 14px;" class="uk-form-file md-btn md-btn-wave-light">
                                    Upload file
                                    <input name="file1" id="file1" type="file" onchange="uploadFile()">
                                </div>
                                
                               @if($invoice['save']==1)
                                  <a  href="{!! route('invoice_update_save',$invoice->id) !!}" id="popup" style="float: left;margin-right: 15px" class="md-btn md-btn-primary md-btn-mini md-btn-wave-light waves-effect waves-button waves-light">Mark as Open</a>
                                @endif
                                @if($invoice['save']==1)

                                <p id="draft" style="margin: 0;padding: 0;padding-top: 7px;float: left;margin-right: 10px;text-transform: uppercase">Draft</p>

                                @endif

                                <i class="md-icon material-icons" id="invoice_print"></i>
                                <div class="md-card-dropdown" data-uk-dropdown="{pos:'bottom-right'}" aria-haspopup="true" aria-expanded="false">
                                    <i class="md-icon material-icons"></i>
                                    <div class="uk-dropdown" aria-hidden="true">
                                        <ul id="nav_in_without_href" class="uk-nav" style="display: {{ $invoice['save']==1?'block':'none' }}">

                                           <li>
                                               <a href="{{ url('/invoice/show'.'/'.$invoice->id) }}">Invoice</a>
                                           </li>

                                           <li>
                                               <a href="{{ url('/invoice/edit'.'/'.$invoice->id) }}">Edit</a>
                                           </li>
                                           @if($invoice->file_url)
                                            <li>
                                                <a  href="{{ url($invoice->file_url) }}" downlaod class="uk-nav-header">Attach File</a>
                                            </li>
                                           @endif
                                           
                                           <li>
                                               <a class="uk-nav-header">Challan</a>
                                           </li>
                                        </ul>

                                        <ul id="nav_in_with_href" class="uk-nav" style="display: {{ $invoice->save==1?'none':'block' }}" >

                                            <li>
                                                <a href="{{ url('/invoice/show'.'/'.$invoice->id) }}">Invoice</a>
                                            </li>
                                            <li>
                                                <a href="{{ url('/invoice/edit'.'/'.$invoice->id) }}">Edit</a>
                                            </li>
                                             @if($invoice->file_url)
                                                <li>
                                                    <a  href="{{ url($invoice->file_url) }}" download>Attach File</a>
                                                </li>
                                             @endif

                                            <li>
                                                <a data-uk-modal="{target:'#modal_header_footer'}" href="#">Use Credits</a>
                                            </li>

                                            <li>
                                                <a data-uk-modal="{target:'#modal_header_footer1'}" href="#">Use Excess Payment</a>
                                            </li>

                                            <li>
                                                <a href="{{ url('invoice/challan'.'/'.$invoice->id) }}">Challan</a>
                                            </li>  
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="md-card-content invoice_content print_bg" style="margin-top: 0px;">
                            
                           @if($theader->getBanner()->headerType)
                                <div class="print_header" style="text-align: center;">
                                    <img src="{{ asset($theader->getBanner()->file_url) }}">
                                </div>
                            @else
                                <div class="uk-grid" data-uk-grid-margin style="text-align: center; margin-top:50px;">
                                    <h1 style="width: 100%; text-align: center;"><img style="text-align: center;" class="logo_regular" src="{{ url('uploads/op-logo/logo.png') }}" alt="" height="15" width="71"/> {{ $OrganizationProfile->company_name }}</h1>
                                </div>
                                <div class="" style="text-align: center;">
                                    <p>{{ $OrganizationProfile->street }}, {{ $OrganizationProfile->city }}, {{ $OrganizationProfile->state }}, {{ $OrganizationProfile->country }}</p>
                                    <p style="margin-top: -17px;">{{ $OrganizationProfile->email }}, {{ $OrganizationProfile->contact_number }}</p>
                                    <p style="margin-top: -20px;">{{ $OrganizationProfile->etin > 0 ? 'BIN ' . $OrganizationProfile->etin : '' }}</p>
                                    <br>
                                </div>
                           @endif
    
                            <div class="uk-grid" data-uk-grid-margin>
                                
                                <div class="uk-width-5-5" style="font-size: 15px;">
                                    <div class="uk-grid">
                                        <h2 style="text-align: center; width: 100%;" class="">
                                            <u>
                                            @if($helper->getPaymentStatus($invoice->id) == "Draft")
                                              DRAFT INVOICE
                                            @else
                                              INVOICE
                                            @endif
                                            </u>
                                            <div>
                                                <small> INV-{{ str_pad($invoice->invoice_number, 6, '0', STR_PAD_LEFT) }} </small>
                                            </div>
                                        </h2>
                                        
                                    </div>
                                </div>
                                
                            </div>
                            <input type="hidden" ng-init="invoice_id='asdfg'" value="{{$invoice->id}}" name="invoice_id" ng-model="invoice_id">




                            {{-- New Top Section --}}
                            <div class="uk-grid uk-margin-large-bottom" style="font-size: 12px;margin-top: 25px;">
                                <div class="uk-width-1-1">
                                    <table id="table_center" border="1" style="width: 100%">
                                        <thead>
                                            <tr>
                                                <th style="width: 70%">Bill To: @if(isset($invoice->personal_note)) <span style="text-align: right;">&nbsp;&nbsp;&nbsp; {{ $invoice->personal_note }}</span> @endif</th>
                                                <th>Invoice Number</th>
                                                <td> INV-{{ str_pad($invoice->invoice_number, 6, '0', STR_PAD_LEFT) }} </td>
                                            </tr>
                                        </thead>
                                        
                                        <tbody>
                                            <tr>
                                                <td rowspan="4"> 
                                                    <address>
                                                        @if($invoice->customer->first_name || $invoice->customer->last_name)
                                                            <p><strong>{{ $invoice->customer->first_name }}</strong></p>
                                                            <p><strong>{{ $invoice->customer->last_name }}</strong></p>
                                                        @else
                                                            <p><strong>{{ $invoice->customer->display_name }}</strong></p>
                                                        @endif
                                                        <p><strong>{{ $invoice->customer->company_name }}</strong></p>
                
                                                        <p>
                
                                                            @if(!empty($invoice->customer->billing_street))
                                                                {{ $invoice->customer->billing_street }},
                                                            @endif
                                                            @if(!empty($invoice->customer->billing_city))
                                                                {{ $invoice->customer->billing_city }},
                                                            @endif
                                                            @if(!empty($invoice->customer->billing_state))
                                                                {{ $invoice->customer->billing_state }},
                                                            @endif
                                                            @if(!empty($invoice->customer->billing_zip_code))
                                                                {{ $invoice->customer->billing_zip_code }}
                                                            @endif
                                                                {{ $invoice->customer->billing_country }}
                                                        </p>
                                                        @if(isset($invoice->customer->phone_number_1) && $invoice->customer->phone_number_1 != "")
                                                            <b>Phone: </b> {{ $invoice->customer->phone_number_1 }}
                                                        @endif
                                                        <!--<p> <b>Delivery address- </b>-->
                                                        <!--    @if($invoice->customer->shipping_street)-->
                                                        <!--    {{ $invoice->customer->shipping_street }},-->
                                                        <!--    @endif-->
                                                        <!--    @if($invoice->customer->shipping_city)-->
                                                        <!--    {{ $invoice->customer->shipping_city }},-->
                                                        <!--    @endif-->
                                                        <!--    @if($invoice->customer->shipping_state)-->
                                                        <!--    {{ $invoice->customer->shipping_state }},-->
                                                        <!--    @endif-->
                                                        <!--    @if($invoice->customer->shipping_zip_code)-->
                                                        <!--    {{ $invoice->customer->shipping_zip_code }},-->
                                                        <!--    @endif-->
                                                        <!--    {{ $invoice->customer->shipping_country }}-->
                                                        <!--</p>-->
                                                    </address>
                                                </td>
                                                <th> Invoice Date </th>
                                                <td> {{ date('d-m-Y',strtotime($invoice->invoice_date)) }} </td>
                                            </tr>
                                            
                                            <tr>
                                                <th> Due Date </th>
                                                <td> {{ isset($invoice->payment_date) ? date('d-m-Y', strtotime($invoice->payment_date)) : '' }} </td>
                                            </tr>

                                            <tr>
                                                <th> Invoice By </th>
                                                <td> {{ $invoice->createdBy->name }} </td>
                                            </tr>

                                            <tr>
                                                <th> Branch </th>
                                                <td> {{ $invoice->createdBy->branch->branch_name }} </td>
                                            </tr>
                                            
                                            <tr class="no-border">
                                                <!--<td class="no-border"> <span style="font-weight: bold;"> Pay Method </span> <span style="margin-left: 10%;"> //Pay Method// </span> <span style="margin-left: 10%; font-weight: bold;">PO Date</span> <span style="margin-left: 10%;"> //Some Date// </span> </td>-->
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {{-- End New Top Section --}}


                            {{-- New Mid Section of Invoice --}}
                            <div class="uk-grid uk-margin-large-bottom" style="font-size: 12px;margin-top: 5px;">
                                <div class="uk-width-1-1">
                                    <table id="table_center" border="1" style="width: 100%">
                                        <thead>
                                            <tr>
                                                <th colspan="7"> Items: </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td style="font-weight: bold;">SL.</td>
                                                <td style="font-weight: bold; width: 15%;">Item</td>
                                                <td style="font-weight: bold; width: 20%;">Name</td>
                                                <td class="uk-text-center" style="font-weight: bold; width: 10%;">Quantity</td>
                                                <td class="uk-text-right" style="font-weight: bold;">Unit Price</td>
                                                @if($invoice_discount_count>0)<td class="uk-text-right" >Discount</td>@endif
                                                <td class="uk-text-right" style="font-weight: bold;">Total</td>
                                            </tr>

                                            @foreach($invoice_entries as $invoice_entry)

                                            <tr>
                                                <td> {{ $loop->iteration }} </td>
                                                <td> {{ isset($invoice_entry->item->itemSubCategory) ? $invoice_entry->item->itemSubCategory->item_sub_category_name : '' }} </td>
                                                <td> {{ $invoice_entry->item->barcode_no . ', ' . $invoice_entry->item->item_name }} </td>
                                                <td class="uk-text-center"> {{ $invoice_entry->quantity }} </td>
                                                <td class="uk-text-right"> {{ number_format($invoice_entry->rate, 2, '.', ',') }} </td>
                                                @if($invoice_discount_count>0)<td class="uk-text-right" >{{ number_format($invoice_entry->discount, 2, '.', ',') }}@if($invoice_entry->discount_type==0) % @else BDT @endif</td>@endif
                                                <td class="uk-text-right"> {{ number_format($invoice_entry->amount, 2, '.', ',') }} </td>
                                            </tr>


                                                {{-- <tr class="uk-table-middle">
                                                    <td class="uk-text-center">{{ $loop->iteration }}</td>
                                                    <td class="uk-text-left" style="width: 300px;">{{ $invoice_entry->item->item_name }} @if($invoice_entry->description) {!! nl2br($invoice_entry['description']) !!}@endif</td>
                                                    <td class="uk-text-center">{{ $invoice_entry->quantity.' '.$invoice_entry->item['unit_type'] }}</td>
                                                    <td class="uk-text-right">{{ number_format($invoice_entry->rate, 2, '.', ',') }}</td>
                                                    @if($invoice_discount_count>0)<td class="uk-text-center" >{{ number_format($invoice_entry->discount, 2, '.', ',') }}@if($invoice_entry->discount_type==0) % @else BDT @endif</td>@endif
                                                    <td class="uk-text-right">{{ number_format($invoice_entry->amount, 2, '.', ',') }}</td>
                                                </tr> --}}
                                            @endforeach

                                            <tr class="no-border">
                                                <td class="no-border"></td>
                                                <td class="no-border"></td>
                                                <td class="no-border"></td>
                                                <td class="no-border uk-text-center" style="font-weight: bold;">{{ $quantity }}</td>
                                                <td class="no-border"></td>
                                                <td class="no-border"></td>
                                                <td class="no-border uk-text-right style="font-weight: bold;">{{ number_format($sub_total, 2, '.', ',') }}</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                    

                                </div>
                            </div>
                            {{-- New Mid Section of Invoice --}}



                            {{-- Bottom sections --}}
                            <div class="uk-grid uk-margin-large-bottom" style="font-size: 12px;margin-top: 5px;justify-content: space-between !important;">
                                <div class="uk-width" style="width: 70%;">
                                    <table id="table_center" border="1" style="width: 100%;">
                                        <tbody>
                                            <tr>
                                                <td> <span style="font-weight: bold"> Amount In Words: </span> {{ucfirst($numberTransformer->toWords($invoice->total_amount))}} BDT Only </td>
                                            </tr>
                                            <tr>
                                                <td> <span style="font-weight: bold"> Description: </span> {{ $invoice->customer_note }} </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="uk-width" style="width: 5%;"></div>

                                <div class="uk-width" style="width: 25%;">
                                    <table id="table_center" border="1" style="width: 100%;">
                                        <tbody>
                                            <tr>
                                                <td style="font-weight: bold;"> Sub Total </td>
                                                <td class="uk-text-right"> {{ number_format($sub_total, 2, '.', ',') }} </td>
                                            </tr>
                                            <tr>
                                                <td style="font-weight: bold;"> VAT (%) </td>
                                                <td class="uk-text-right">
                                                        {{ ($invoice->tax_type) ? $invoice->tax_type : "" }}
                                                    @if($invoice->shipping_charge>0 && $invoice->adjustment)
                                                        {{number_format(($invoice->total_amount - $sub_total -$invoice->shipping_charge-$invoice->adjustment)*100/($sub_total+$invoice->adjustment),2, '.', '')}}%
                                                    @elseif($invoice->shipping_charge>0)
                                                        {{number_format(($invoice->total_amount - $sub_total -$invoice->shipping_charge)*100/$sub_total,2, '.', '')}}%
                                                    @elseif($invoice->adjustment)
                                                        {{number_format(($invoice->total_amount - $invoice->adjustment - $sub_total)*100/($sub_total+$invoice->adjustment),2, '.', '')}}%
                                                    @else
                                                        {{number_format(($invoice->total_amount - $sub_total)*100/$sub_total,2, '.', '')}}%
                                                    @endif
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="font-weight: bold;"> VAT </td>
                                                <td class="uk-text-right"> {{ number_format($invoice->tax_total, 2, '.', ',') }} </td>
                                            </tr>
                                            <tr>
                                                <td style="font-weight: bold;"> Discount </td>
                                                <td class="uk-text-right"> {{ number_format($invoice->adjustment, 2, '.', ',') }} </td>
                                            </tr>
                                            
                                            @if($invoice->shipping_charge > 0)
                                                <tr>
                                                    <td style="font-weight: bold;"> Shipping Charge </td>
                                                    <td class="uk-text-right"> {{ number_format($invoice->shipping_charge, 2, '.', ',') }} </td>
                                                </tr>
                                            @endif
                                            
                                            <tr>
                                                <td></td>
                                                <td class="uk-text-right" style="font-weight: bold;"> {{ number_format($invoice->total_amount, 2, '.', ',') }} </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {{-- End Bottom sections --}}


                            {{-- Signature Section --}}

                            <div class="uk-grid" style="margin-top:30px;">
                                <div class="uk-width-1-10"></div>
                                <div class="uk-width-1-5 uk-text-center">
                                    <p class="uk-text-small uk-margin-bottom" style="border-top: solid 1px; margin: 50px 0px">Seller Signature</p>
                                </div>
                                <div class="uk-width-1-10"></div>
                                <div class="uk-width-1-5 uk-text-center" >
                                    <p  class="uk-text-small uk-margin-bottom" style="border-top: solid 1px; margin: 50px 0px">Authorised Signature</p>
                                </div>
                                <div class="uk-width-1-10"></div>
                                <div class="uk-width-1-5 uk-text-center" >
                                    <p  class="uk-text-small uk-margin-bottom" style="border-top: solid 1px; margin: 50px 0px">Customer Signature</p>
                                </div>
                                <div class="uk-width-1-10"></div>
                            </div>

                            {{-- End Signature Section --}}


                            {{-- Invoice Print Date --}}

                            <div class="uk-grid" style="margin-left:10px; margin-top:30px;">
                                {{$now_date->format('d-m-Y H:i')}}
                            </div>

                            {{-- End Invoice Print Date --}}

                        </div>
                    </div>
                </div>


                <div class="hidden-print">
                    <div class="uk-margin-large-top">
                        <h2 class="heading_b">Payments Received</h2>
                    </div>

                    <div class="ük-grid uk-margin-top" data-uk-grid-margin>
                        <div class="md-card md-card-single main-print">
                            <div class="uk-grid uk-margin-large-bottom">
                                <div class="uk-width-1-1">
                                    <table class="uk-table report_table">
                                        <thead>
                                        <tr class="uk-text-upper">
                                            <th>#</th>
                                            <th>Date</th>
                                            <th class="uk-text-right">Payment#</th>
                                            <th class="uk-text-right">Reference#</th>
                                            <th class="uk-text-right">Deposit To</th>
                                            <th class="uk-text-right">Amount</th>
                                            <th class="uk-text-center">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <?php $i = 1;?>
                                        @foreach($payment_receive_entries as $payment_receive_entry)
                                        <tr class="uk-table-middle">
                                            <td>{{ $i++ }}</td>
                                            <td>{{ $payment_receive_entry->paymentReceive->payment_date }}</td>
                                            <td class="uk-text-right">PR-{{ str_pad($payment_receive_entry->paymentReceive['pr_number'],'6','0',STR_PAD_LEFT) }}</td>
                                            <td class="uk-text-right">{{ $payment_receive_entry->paymentReceive->reference }}</td>
                                            <td class="uk-text-right">{{ $payment_receive_entry->paymentReceive->account->account_name }}</td>
                                            <td class="uk-text-right">BDT {{ $payment_receive_entry->amount }}</td>
                                            <td class="uk-text-center">
                                                <a href="{{ url('/payment-received/edit'.'/'.$payment_receive_entry->payment_receives_id) }}"><i data-uk-tooltip="{pos:'top'}" title="Edit" class="md-icon material-icons">&#xE254;</i></a>
                                                <a class="payment_receive_delete_btn"><i data-uk-tooltip="{pos:'top'}" title="Delete" class="md-icon material-icons">&#xE872;</i></a>
                                                <input type="hidden" class="payment_receive_entry_id" value="{{ $payment_receive_entry->id }}">
                                            </td>
                                        </tr>
                                        @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="uk-margin-top">
                        <h2 class="heading_b">Credits Applied</h2>
                    </div>

                    <div class="ük-grid uk-margin-top" data-uk-grid-margin>
                        <div class="md-card md-card-single main-print">
                            <div class="uk-grid uk-margin-large-bottom">
                                <div class="uk-width-1-1">
                                    <table class="uk-table">
                                        <thead>
                                        <tr class="uk-text-upper">
                                            <th>#</th>
                                            <th>Date</th>
                                            <th>Credit Note</th>
                                            <th class="uk-text-right">Credits Applied</th>
                                            <th class="uk-text-center">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <?php $i = 1;?>
                                        @foreach($credit_receive_entries as $credit_receive_entry)
                                        <tr class="uk-table-middle">
                                            <td>{{ $i++ }}</td>
                                            <td>{{ $credit_receive_entry->created_at->format('Y-m-d') }}</td>
                                            <td>CN-{{ $credit_receive_entry->creditnote->credit_note_number }}</td>
                                            <td class="uk-text-right">BDT {{ $credit_receive_entry->amount }}</td>
                                            <td class="uk-text-center">
                                                {{--<a href="{{ url('/invoice/delete-credit'.'/'.$credit_receive_entry->id) }}" class="delete_btn"><i data-uk-tooltip="{pos:'top'}" title="Delete" class="md-icon material-icons">&#xE872;</i></a>--}}
                                                <a class="credit_receive_entry_delete_btn"><i data-uk-tooltip="{pos:'top'}" title="Delete" class="md-icon material-icons">&#xE872;</i></a>
                                                <input type="hidden" class="credit_receive_entry_id" value="{{ $credit_receive_entry->id }}">
                                            </td>
                                        </tr>
                                        @endforeach
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

        {{--model--}}
        @include('invoice::invoice.use_credit')
        @include('invoice::invoice.use_excess_payments')

    <!-- Create Item Modal -->
        <div class="modal fade" id="create-item" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="margin-top: 50px">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        <h4 class="modal-title" id="myModalLabel">Stock Unavailable</h4>
                    </div>
                    <form action="{!! route('adding_stock',$invoice->id) !!}" method="post">
                        {!! csrf_field() !!}
                    <div class="modal-body">
                        <h3 style="list-style: none;color: green;margin-top: 10px;text-decoration: underline">Item</h3>
                        <table class="table table-bordered">
                            <thead style="margin-top: 30px;background-color: #5CB85C;color: white;text-transform: uppercase;">
                            <tr>
                                <th>Pen</th>
                                <th>Available</th>
                                <th>Your Quantity</th>
                            </tr>
                            </thead>
                            <tbody id="stockEntry">

                            </tbody>
                        </table>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary">Add Stock & Create</button>
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>


        <!-- show Item Modal -->
        <div class="modal fade" id="message-item" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="margin-top: 50px">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                        <h4 class="modal-title" id="myModalLabel">Mark As Open</h4>
                    </div>
                    <form action="{!! route('adding_stock',$invoice->id) !!}" method="post">
                        {!! csrf_field() !!}
                        <div class="modal-body">
                            <h3 style="list-style: none;color: green;margin-top: 10px;">Invoice was marked as open</h3>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
@endsection

@section('sweet_alert')

            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/js/bootstrap.min.js"></script>
            <script>


                $('.payment_receive_delete_btn').click(function () {
                    var id = $(this).next('.payment_receive_entry_id').val();
                    swal({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this! If you delete this",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then(function () {
                        window.location.href = "/payment-received/delete-payment-receive-entry/"+id;
                    })
                })

                $('.credit_receive_entry_delete_btn').click(function () {
                    var id = $(this).next('.credit_receive_entry_id').val();
                    swal({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this! If you delete this",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then(function () {
                        window.location.href = "/invoice/delete-credit/"+id;
                    })
                })


                    $("#popup").click(function(e){
                        e.preventDefault();
                        axios.post(this.href)
                            .then(function (response) {
                                var row=document.getElementById('stockEntry');
                                row.innerHTML=response.data;


                            })
                            .catch(function (error) {
                                console.log(error);
                            });

                        axios.get(this.href)
                            .then(function (response) {

                              if(response.data.status){


                                  $("#create-item").modal("show");
                                  $("#popup").hide();
                                  setTimeout(function () {
                                      location.reload();
                                  }, 15000)


                              }else{

                                  $("#message-item").modal("show");
                                  $("#popup").hide();
                                  $("#draft").hide();
                                  $("#nav_in_without_href").hide();
                                  $("#nav_in_with_href").show();


                              }

                            })
                            .catch(function (error) {
                                console.log(error);
                            });


                    });
                $('#sidebar_main_account').addClass('current_section');
                $('#sidebar_invoice').addClass('act_item');

                $(window).load(function(){
                    $("#tiktok_account").trigger('click');

                })


                function _(el) {
                    return document.getElementById(el);
                }

                function uploadFile(){
                    _("progressBar").style.display = "block";
                    var file = _("file1").files[0];
                    var size= file.size/1024/1024;
                    if(size>10){
                        _("status").innerHTML = "file size not allowed";
                        _("status").style.color = "red";
                        return false;
                    }
                    _("status").style.color = "black";

                    // alert(file.name+" | "+file.size+" | "+file.type);
                    var formdata = new FormData();
                    formdata.append("file1", file);
                    var ajax = new XMLHttpRequest();
                    ajax.upload.addEventListener("progress", progressHandler, false);
                    ajax.addEventListener("load", completeHandler, false);
                    ajax.addEventListener("error", errorHandler, false);
                    ajax.addEventListener("abort", abortHandler, false);
                    ajax.open("POST", window.location.href);
                    ajax.send(formdata);
                }

                function progressHandler(event) {
                    _("loaded_n_total").innerHTML = "Uploaded " + event.loaded + " bytes of " + event.total;
                    var percent = (event.loaded / event.total) * 100;
                    _("progressBar").value = Math.round(percent);
                     _("status").innerHTML = Math.round(percent) + "% uploaded... please wait";
                }

                function completeHandler(event) {
                    // _("status").innerHTML = event.target.responseText;

                 //   UIkit.modal.alert(event.target.responseText)
                    _("progressBar").value = 100;
                    _("progressBar").style.color = "blue";
                    _("status").innerHTML = event.target.responseText;
                }

                function errorHandler(event) {
                    //  _("status").innerHTML = "Upload Failed";
                    alert("Upload Failed");
                    _("progressBar").style.display = "none";
                }

                function abortHandler(event) {
                    // _("status").innerHTML = "Upload Aborted";
                    alert("Upload Aborted");
                    _("progressBar").style.display = "none";
                }
            </script>
@endsection
